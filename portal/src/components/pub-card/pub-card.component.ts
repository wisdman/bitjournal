import { Component, ViewEncapsulation, Input } from '@angular/core'

import { IPublication } from '@common/models'

@Component({
  selector: '.bj-pub-card',
  templateUrl: './pub-card.component.html',
  styleUrls: [ './pub-card.component.css' ],
  encapsulation: ViewEncapsulation.None,
  host: {

  }
})
export class PubCardComponent {

  @Input() value: IPublication
}
