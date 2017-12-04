import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UserService } from '../../services'

import { User, RoleEnum } from '@common/models'

@Component({
  selector: 'body',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  currentUser: User | null = null

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router,
  ) {}

  ngOnInit() {
    this._userService.me().subscribe( item => this.currentUser = item )
  }

  profile() {
    if (!this.currentUser)
      return

    this._router.navigate(['users', String(this.currentUser.id)])
  }

  logout() {
    this._userService.logout()
  }
}
