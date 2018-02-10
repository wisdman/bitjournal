import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

import { IPublication } from '@common/publication'

@Component({
  selector: '.bj-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  @Input() value: IPublication | null = null

  get content(): SafeHtml {
    if (!this.value)
      return ''

    return this._domSanitizer.bypassSecurityTrustHtml(this.value.content)
  }

  constructor(private readonly _domSanitizer: DomSanitizer){}
}
