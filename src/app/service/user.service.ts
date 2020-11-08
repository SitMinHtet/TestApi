import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: string

  constructor(private http:HttpClient) {
    this.api = 'http://localhost:8080/users'
  }

  public getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.api)
  }

  public addUser(user: User){
    return this.http.post<User>(this.api, user)
  }



}
