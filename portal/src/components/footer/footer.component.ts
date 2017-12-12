import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import {
  SocialService
} from '../../services'

@Component({
  selector: '.bj-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements AfterViewInit {

  constructor(
    private readonly _socialService: SocialService,
  ) {}

  addVKWidget() {
    this._socialService.vk().then( VK => {

      if (!VK)
        return

      VK.Widgets.Group('vk_group_vidget', {
        mode: 1,
        no_cover: 1,
        color2: '24292e',
      }, SocialService.VK_SOCIAL_ID)
    })
  }

  addTwitterWidget() {
    this._socialService.twitter().then( tw => {})
  }

  addYouTubeWidget() {
    this._socialService.google().then( ga => {})
  }

  addFBWidget() {
    this._socialService.fb().then( fb => {})
  }

  ngAfterViewInit() {
    this.addVKWidget()
    this.addTwitterWidget()
    this.addYouTubeWidget()
    this.addFBWidget()
  }
}

