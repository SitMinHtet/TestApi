import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User[]
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      this.user = data
    })

  }

}
