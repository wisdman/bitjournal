import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'

import { DialogService } from '../dialog'
import { APIService } from '../api'

const API_BASE = 'raw'

@Injectable()
export class FileService {


  constructor(
    private readonly _api: APIService,
    private readonly _router: Router,
    private readonly _dialog: DialogService
  ) {}

  put(data: Blob | ArrayBuffer) {
    return this._api.put<{ oid: number }>(`/${API_BASE}`, data)
  }

  open({
    accept = 'image/*',
    multiple = false,
  }: {
    accept?: string
    multiple?: boolean
  } = {}): Observable<File> {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.style.display = 'none'
    fileInput.multiple = multiple
    fileInput.accept = accept

    let result = Observable.fromEvent(fileInput, 'change', { once: true })
                           .map( _ => fileInput.files || new FileList() )
                           .switchMap( items => Observable.from(items) )
    fileInput.click()
    return result
  }

  upload(options?: { accept?: string, multiple?: boolean }): Observable<{ oid: number }> {
    return this.open(options)
               .map( file => this.put(file) )
               .switchMap( items => Observable.from(items) )
  }

  delete(oid: number): Observable<{ oid: number }> {
    return this._api.delete<{ oid: number }>(`/${API_BASE}/${oid}`)
  }

  // openAsArrayBuffer(options?: { accept?: string, multiple?: boolean }) {
  //   const result = this.open(options)
  //   return result.map(file => {
  //                       const reader = new FileReader()
  //                       const result = Observable.fromEvent(reader,'loadend', { once: true })
  //                                                .map( _ => (reader.result as ArrayBuffer))
  //                       reader.readAsArrayBuffer(file as Blob)
  //                       return result
  //                     }).switchMap( items => Observable.from(items) )
  // }



  // get(oid: number) {
  //   return this._api.get(`/${API_BASE}/${oid}`)
  //                   .map( item => {
  //                     console.dir(item)
  //                     return item
  //                   })
  // }


}
