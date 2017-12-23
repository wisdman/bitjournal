import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { DialogService } from '../dialog'

import { IYouTubeVideo } from '@common/video'
import { YOUTUBE_DATA_URL } from '@common/environment'

const YOUTUBE_URL_REGEXP =
  /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/

@Injectable()
export class YouTubeService {
  static parseVideoId(text: string): string | undefined {
    text = text.trim()
    const idMatch = /^[a-zA-Z0-9_-]{6,11}$/.exec(text)
    if (idMatch)
      return idMatch[0]

    const urlMatch = YOUTUBE_URL_REGEXP.exec(text)
    if (urlMatch)
      return urlMatch[1]

    return undefined
  }

  static formatDuration(duration: string): string {
    return duration.replace(/[^0-9]+/g, ':')
                   .replace(/(^:+|:+$)/g, '')
  }

  constructor(
    private readonly _http: HttpClient,
    private readonly _dialog: DialogService) {}

  getVideoData(ids: Array<string> = []): Observable< Array<IYouTubeVideo> > {
    if (ids.length <= 0)
      return Observable.of( new Array<IYouTubeVideo>() )

    const query = YOUTUBE_DATA_URL.replace(/\{\{\s*IDS\s*\}\}/, ids.join(','))

    return this._http.get<any>(query)
                     .catch(error => {
                        this._dialog.open({ title: 'YouTube Error', message: String(error) })
                        return Observable.of(null)
                     })
                     .map( item => item && item.items || null )
                     .filter( item => Array.isArray(item) ) as Observable< Array<IYouTubeVideo> >
  }
}
