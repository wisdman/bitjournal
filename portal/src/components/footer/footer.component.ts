import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import {
  ExternalService
} from '../../services'

import { VK_SOCIAL_ID } from '@common/environment'

@Component({
  selector: '.bj-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements AfterViewInit {

  constructor(
    private readonly _ext: ExternalService,
  ) {}

  addVKWidget() {
    this._ext.vk.then( VK => {
      if (!VK) return

      VK.Widgets.Group('vk_group_vidget', {
        mode: 1,
        no_cover: 1,
        color2: '24292e',
      }, VK_SOCIAL_ID)
    })
  }

  ngAfterViewInit() {
    this.addVKWidget()
  }
}

