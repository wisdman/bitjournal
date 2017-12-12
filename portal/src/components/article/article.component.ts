import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { IPublication } from '@common/models'

import {
  APIService,
  MetaService
} from '../../services'

const API_PUBLICATIONS = 'publications'

@Component({
  selector: '.bj-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @Input() value: { date: string, url: string }

  items: Observable< Array<IPublication> >

  constructor(
    private readonly _api: APIService,
    private readonly _meta: MetaService,
  ) {}

  setMetaTags(item: IPublication) {
    this._meta.setMetaTags({
      title: item.title,
      description: item.description,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      ogImage: item.ogImage || undefined
    })
  }

  ngOnInit() {

    this.items = this._api
                     .get< IPublication >(`/${API_PUBLICATIONS}/${this.value.date}/${this.value.url}`)
                     .map( item => {
                       this.setMetaTags(item)
                       return new Array<IPublication>(item)
                     })
  }
}
