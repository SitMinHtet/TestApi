import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User
  constructor(private router:Router,private service: UserService, private act: ActivatedRoute) {
    this.user = new User();
  }

  onSubmit(){
    this.service.addUser(this.user).subscribe(result => this.userList())
  }

  userList(){
    this.router.navigate(['/users']);
  }


}
