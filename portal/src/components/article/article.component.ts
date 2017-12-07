import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
