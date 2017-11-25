import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { UserService } from '../../services'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  constructor(private _userServece: UserService){

  }

  ngOnInit(){
    this._userServece.list().subscribe( data => console.log(data) )
  }
}
