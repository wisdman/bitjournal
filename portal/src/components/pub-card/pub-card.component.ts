import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'pub-card',
  templateUrl: './pub-card.component.html',
  styleUrls: [ './pub-card.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PubCardComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
