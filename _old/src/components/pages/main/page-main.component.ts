import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: '.page.page-main',
  templateUrl: './page-main.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageMainComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('BitJournal Home Page');

    meta.addTags([
      {
        name: 'author', content: 'Wisdman'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])

  }

  public ngOnInit() {

  }
}
