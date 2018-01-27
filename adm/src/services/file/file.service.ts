import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/concatAll'


import { DialogService } from '../dialog'
import { APIService } from '../api'

export const RAW_API_PATH = '/raw'

import { ImagePipe } from '../../pipes'

import Pica from 'pica'
const PICA = Pica()

@Injectable()
export class FileService {
  buildFullUrl(oid: number) {

  }

  constructor(
    private readonly _api: APIService,
    private readonly _router: Router,
    private readonly _dialog: DialogService
  ) {}

  put(data: Blob | ArrayBuffer) {
    return this._api.put<{ oid: number }>(`${RAW_API_PATH}`, data)
                    .map( item => ({ oid: item.oid, url: ImagePipe.transform(item.oid) }))
  }

  open({
    accept = 'image/*',
    multiple = false,
    image = undefined
  }: {
    accept?: string
    multiple?: boolean
    image?: { width?: number, height?: number }
  } = {}): Observable<Blob> {

    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.style.display = 'none'
    fileInput.multiple = multiple
    fileInput.accept = accept

    let result = Observable.fromEvent(fileInput, 'change', { once: true })
                           .map( _ => fileInput.files || new FileList() )
                           .switchMap( items => Observable.from(items) )
                           .map( item => {
                             if (!image)
                               return Observable.of(item)

                             return Observable.fromPromise( this.imageEngine(item, image) )
                           }).concatAll()
    fileInput.click()
    return result
  }

  upload(options?: { accept?: string, multiple?: boolean, image?: { width?: number, height?: number } }) {
    return this.open(options)
               .map( file => this.put(file) )
               .switchMap( items => Observable.from(items) )
  }

  delete(oid: number): Observable<{ oid: number }> {
    return this._api
               .delete<{ oid: number }>(`$${RAW_API_PATH}/${oid}`)
  }

  imageEngine(item: File, {
    width = undefined,
    height = undefined,
  }: {
    width?: number,
    height?: number,
  } = {}): Promise<Blob> {

    width = ~~width
    if (width < 0)
      width = 0

    height = ~~height
    if (height < 0)
      height = 0

    return new Promise( (resolve, reject) =>{
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        const img = new Image()
        img.addEventListener('load', () => {
          const from = document.createElement('canvas')
          from.width = img.naturalWidth
          from.height = img.naturalHeight

          const factor = Math.max(width/from.width, height/from.height)

          if ( factor <= 0 || factor >= 1 ) {
            from.toBlob(result => {
            if (!result)
                return reject(new Error('Canvas export error'))
              resolve(result)
            }, 'image/jpeg', 0.92)
            return
          }

          const ctx = from.getContext('2d')
          if (ctx === null)
            return reject(new Error('Canvas error'))
          ctx.scale(1, 1)
          ctx.drawImage(img, 0, 0)

          const to = document.createElement('canvas')
          to.width = from.width*factor
          to.height = from.height*factor

          PICA.resize(from, to)
              .then( (result: HTMLCanvasElement) => result.toBlob(result => {
                if (!result)
                  return reject(new Error('Canvas export error'))
                resolve(result)
              }, 'image/jpeg', 0.92))
              .catch( (error: Error) => reject(error) )
        })
        img.addEventListener('error', () => reject(new Error('Read image error')))
        img.src = fileReader.result
      })
      fileReader.readAsDataURL(item)
    })
  }
}
