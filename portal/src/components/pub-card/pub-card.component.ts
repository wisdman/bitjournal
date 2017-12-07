import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core'

import { IPublication } from '@common/models'

@Component({
  selector: '.bj-pub-card',
  templateUrl: './pub-card.component.html',
  styleUrls: [ './pub-card.component.css' ],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[routerLink]': "['/Matches', 'MatchesDetail']"
  }
})
export class PubCardComponent {

  @Input() value: IPublication

  get h1(): string {
    return this.value.bigTitle
  }

  constructor() {}
}
