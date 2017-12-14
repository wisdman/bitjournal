import { Component, ViewEncapsulation, OnInit, OnDestroy, HostBinding } from '@angular/core'

import { Subscription } from 'rxjs/Subscription'

import {
  LoaderService,
  ILoaderState,
} from '../../services'

@Component({
  selector: '.loader',
  templateUrl: './loader.component.html',
  styleUrls: [ './loader.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription

  @HostBinding('class.loader--show') show: boolean

  constructor(
    private readonly _loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.subscription = this._loaderService
                            .loaderState
                            .subscribe( (state: ILoaderState) => this.show = state.show )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
