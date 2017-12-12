import { Component, ViewEncapsulation, Input } from '@angular/core'

import { IPublication } from '@common/models'

@Component({
  selector: '.bj-pub-line',
  templateUrl: './pub-line.component.html',
  styleUrls: [ './pub-line.component.css' ],
  encapsulation: ViewEncapsulation.None,
  host: {

  }
})
export class PubLineComponent {

  @Input() value: IPublication
}
