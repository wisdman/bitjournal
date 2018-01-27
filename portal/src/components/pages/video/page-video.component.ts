import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeAll'

import {
  APIService,
  MetaService,
  LoaderService,
  YouTubeService,
} from '../../../services'

import { META } from './meta'

import { IVideo, IYouTubeVideo } from '@common/video'
import { IPageVideoItem } from './page-video-item.interface'

import {
  IPublication,
  PUBLICATIONS_API_PATH
} from '@common/publication'

const API_BASE = '/video'

@Component({
  selector: 'page-video.page',
  templateUrl: './page-video.component.html',
  styleUrls: [ './page-video.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageVideoComponent implements OnInit {

  items: Observable< Array<IPageVideoItem> >
  publications: Observable < Array<IPublication> >

  constructor(
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService,
    private readonly _youTubeService: YouTubeService,
  ) {}

  createVideoRibbonItem(item: IYouTubeVideo): IPageVideoItem {
    return {
      id: item.id,
      href: 'https://www.youtube.com/watch?v=' + item.id,
      thumb: item.snippet.thumbnails.medium.url,
      date: new Date(item.snippet.publishedAt),
      title: item.snippet.title,
      duration: YouTubeService.convertDuration(item.contentDetails.duration),
      view: parseInt(item.statistics.viewCount) || 0,
      like: parseInt(item.statistics.likeCount) || 0,
      dislike: parseInt(item.statistics.dislikeCount) || 0,
      comment: parseInt(item.statistics.commentCount) || 0,
    }
  }

  ngOnInit() {
    this._loaderService.show()
    this._meta.setMetaTags(META)
    this.items = this._api
                     .get< Array<IVideo> >(API_BASE)
                     .map( items => items.map( item => item.id ) )
                     .map( items => this._youTubeService.getVideoData(items) )
                     .mergeAll()
                     .map( items => items.map( item => this.createVideoRibbonItem(item) ) )
                     .map( items => items.sort((a, b) => a.date < b.date ? 1 : -1 ) )
                     .map( items => {
                       this._loaderService.hide()
                       return items
                     })

    this.publications = this._api
                             .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { limit: '12' })
  }
}

