import { Component, ViewEncapsulation } from '@angular/core'

import {
  ContextService,
  MetaService
} from '../../../services'

import { META } from './meta'

@Component({
  selector: 'page-404.page',
  templateUrl: './page-404.component.html',
  styleUrls: [ './page-404.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class Page404Component {
  constructor(
    private readonly _context: ContextService,
    private readonly _meta: MetaService,
  ){}

  ngOnInit() {
    this._context.status = 404
    this._meta.setMetaTags(META)
  }
}
