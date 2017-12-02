import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import {
  APIService,
  YouTubeService,
  DialogService,
} from '../../services'

import { IVideo } from '@common/models'
import { IVideoListItem } from './video-list-item.interface'

const API_BASE = 'video'

const YOUTUBE_ID_PATTERN = /[0-9a-zA-Z]{11}/

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService,
    private readonly _youTubeService: YouTubeService,
    private readonly _dialog: DialogService
  ) {}

  displayedColumns = [
    'enable',
    'thumb',
    'date',
    'title',
    'duration',
    'view',
    'like',
    'dislike',
    'comment',
    'delete',
  ]

  dataSource = new MatTableDataSource(new Array<IVideoListItem>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  addItemsToDataSource(...input: Array<IVideo>) {
    const itemsAsObject = input.reduce((prev, item) =>
                                        Object.assign(prev, { [item.id]: item } ),
                                        {} as { [id:string]: IVideo }
                                      )

    this._youTubeService
        .getVideoData( Object.keys(itemsAsObject) )
        .subscribe( items => {
          const newItems = items.map(item =>
                                      Object.assign({}, itemsAsObject[item.id], {
                                        thumb: item.snippet.thumbnails.default.url,
                                        date: new Date(item.snippet.publishedAt),
                                        title: item.snippet.title,
                                        duration: YouTubeService.formatDuration(item.contentDetails.duration),
                                        view: parseInt(item.statistics.viewCount) || 0,
                                        like: parseInt(item.statistics.likeCount) || 0,
                                        dislike: parseInt(item.statistics.dislikeCount) || 0,
                                        comment: parseInt(item.statistics.commentCount) || 0,
                                      })
                                    )
          this.dataSource.data = this.dataSource.data.concat(newItems)
        })
  }

  ngOnInit(){
    this._apiService
        .get< Array<IVideo> >(`/${API_BASE}`)
        .subscribe( items => this.addItemsToDataSource(...items) )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  add() {
    this._dialog.request({
      title: 'Новый видеоролик',
      placeholder: 'Видеоролик',
      message: 'Ссылка на YouTube или ID'
    }).subscribe( result => {
      if (!result)
        return

      let id = YouTubeService.parseVideoId(result)
      if (!id) {
        this._dialog.message('Это не похоже на YouTube ссылку')
        return
      }

      this._apiService
          .post<IVideo>(`/${API_BASE}`, { id, enable: true })
          .subscribe( item => this.addItemsToDataSource(item) )
    })
  }

  delete(deletedItem: IVideoListItem) {
    this._dialog.open({
      title: 'Удалить видеоролик?',
      message: `Вы уверены, что хотите удалить видеоролик "${deletedItem.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result !== true)
        return

      this._apiService
        .delete<IVideo>(`/${API_BASE}/${deletedItem.id}`)
        .subscribe( _ => this.dataSource.data = this.dataSource.data.filter( item => item.id !== deletedItem.id ) )
    })
  }

  toggle(item: IVideoListItem) {
    this._apiService
        .post<IVideo>(`/${API_BASE}/${item.id}`, { id: item.id, enable: !item.enable })
        .subscribe( newItem => item.enable = newItem.enable )
  }

}
