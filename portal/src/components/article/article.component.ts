import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core'

import { IPublication } from '@common/publication'

@Component({
  selector: '.bj-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  @Input() value: IPublication | null = null
}
