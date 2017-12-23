import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { MessageService } from '../message'

import { IYouTubeVideo } from '@common/video'

import { YOUTUBE_DATA_URL } from '@common/environment'

@Injectable()
export class YouTubeService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _message: MessageService) {}

  getVideoData(ids: Array<string> = []): Observable< Array<IYouTubeVideo> > {
    if (ids.length <= 0)
      return Observable.of( new Array<IYouTubeVideo>() )

    const query = YOUTUBE_DATA_URL.replace(/\{\{\s*IDS\s*\}\}/, ids.join(','))

    return this._http.get<any>(query)
                     .catch(error => {
                        this._message.message(`YouTube: ${String(error)}`)
                        return Observable.of(null)
                     })
                     .map( item => item && item.items || null )
                     .filter( item => Array.isArray(item) ) as Observable< Array<IYouTubeVideo> >
  }
}
