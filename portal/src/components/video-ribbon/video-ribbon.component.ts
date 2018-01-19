import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeAll'

import {
  APIService,
  YouTubeService,
} from '../../services'

import { IVideo, IYouTubeVideo } from '@common/video'
import { IVideoRibbonItem } from './video-ribbon-item.interface'

const API_BASE = '/video'

@Component({
  selector: '.bj-video-ribbon',
  templateUrl: './video-ribbon.component.html',
  styleUrls: [ './video-ribbon.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class VideoRibbonComponent implements OnInit {

  items: Observable< Array<IVideoRibbonItem> >

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService,
    private readonly _youTubeService: YouTubeService,
  ) {}

  createVideoRibbonItem(item: IYouTubeVideo): IVideoRibbonItem   {
    return {
      id: item.id,
      href: 'https://www.youtube.com/watch?v=' + item.id,
      thumb: item.snippet.thumbnails.medium.url,
      date: new Date(item.snippet.publishedAt),
      title: item.snippet.title,
      duration: item.contentDetails.duration,
      view: parseInt(item.statistics.viewCount) || 0,
      like: parseInt(item.statistics.likeCount) || 0,
      dislike: parseInt(item.statistics.dislikeCount) || 0,
      comment: parseInt(item.statistics.commentCount) || 0,
    }
  }

  ngOnInit() {
    this.items = this._apiService
                     .get< Array<IVideo> >(API_BASE)
                     .map( items => items.map( item => item.id ) )
                     .map( items => this._youTubeService.getVideoData(items) )
                     .mergeAll()
                     .map( items => items.map( item => this.createVideoRibbonItem(item) ) )
                     .map( items => items.sort((a, b) => a.date < b.date ? 1 : -1 ) )
  }
}
