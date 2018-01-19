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
  static convertDuration(input: string): string {

    const match = input.match(/(\d+)(H|M|S)/g)

    if (!match)
      return '0:00'

    let seconds = match.reduce( (prev, item) => {
                        const type = item[item.length - 1]

                        if (type === 'H')
                          return prev + (parseInt(item) * 3600)

                        if (type === 'M')
                          return prev + (parseInt(item) * 60)

                        if (type === 'S')
                          return prev + parseInt(item)

                        return prev
                       }, 0)

    const hh = Math.floor( seconds / 3600)
    seconds = seconds % 3600

    const mm = Math.floor( seconds / 60)
    seconds = seconds % 60

    return (hh > 0 ? `${hh}:` : '') + ('00' + String(mm)).slice(-2) + ':' + ('00' + String(seconds)).slice(-2)
  }

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
