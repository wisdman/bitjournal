import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { CurrentUserService } from '../../services'

import { User } from '@common/models'

@Component({
  selector: 'body',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  currentUser: User | null = null

  constructor(
    private readonly _user: CurrentUserService,
    private readonly _router: Router,
  ) {}

  ngOnInit() {
    this._user.me().subscribe( item => this.currentUser = item )
  }

  profile() {
    if (!this.currentUser)
      return

    this._router.navigate(['users', String(this.currentUser.id)])
  }

  logout() {
    this._user.logout()
  }
}
