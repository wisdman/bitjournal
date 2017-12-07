import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { IPublication } from '@common/models'

import {
  PublicationService,
} from '../../../services'

@Component({
  selector: 'page-main',
  templateUrl: './page-main.component.html',
  styleUrls: [ './page-main.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMainComponent implements OnInit {

  publications: Observable < Array<IPublication> >

  constructor(
    private readonly _router: Router,
    private readonly _publicationService: PublicationService,
  ) {}

  ngOnInit() {
    this.publications = this._publicationService
                            .get()
  }
}
