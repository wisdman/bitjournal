import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
