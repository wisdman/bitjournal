import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'

import {
  PublicationService,
  IPublicationItem,
} from '../../../services'

// import { IPublication } from '@common/models'
// import { IVideoRibbonItem } from './video-ribbon-item.interface'

@Component({
  selector: 'page-main',
  templateUrl: './page-main.component.html',
  styleUrls: [ './page-main.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMainComponent implements OnInit {

  items: Observable < Array<IPublicationItem> >

  constructor(
    private readonly _router: Router,
    private readonly _publicationService: PublicationService,
  ) {}

  ngOnInit() {
    this.items = this._publicationService
                     .get()
  }
}
