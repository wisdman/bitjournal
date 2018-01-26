import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { META } from './meta'

import {
  MetaService,
} from '../../../services'

@Component({
  selector: 'page-donate.page',
  templateUrl: './page-donate.component.html',
  styleUrls: [ './page-donate.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageDonateComponent implements OnInit {

  constructor(
    private readonly _meta: MetaService,
  ) {}

  ngOnInit() {
    this._meta.setMetaTags(META)
  }
}
