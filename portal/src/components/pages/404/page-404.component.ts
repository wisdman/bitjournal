import { Component, ViewEncapsulation } from '@angular/core'

import { ContextService } from '../../../services'

@Component({
  selector: 'page-404.page',
  templateUrl: './page-404.component.html',
  styleUrls: [ './page-404.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class Page404Component {
  constructor(
    private readonly _context: ContextService
  ){}

  ngOnInit() {
    this._context.status = 404
  }
}
