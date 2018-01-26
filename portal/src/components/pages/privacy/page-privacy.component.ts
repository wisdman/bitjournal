import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { META } from './meta'

import {
  MetaService,
} from '../../../services'

@Component({
  selector: 'page-privacy.page',
  templateUrl: './page-privacy.component.html',
  styleUrls: [ './page-privacy.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PagePrivacyComponent implements OnInit {

  constructor(
    private readonly _meta: MetaService,
  ) {}

  ngOnInit() {
    this._meta.setMetaTags(META)
  }
}
