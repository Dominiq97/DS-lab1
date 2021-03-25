import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  publicisLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  publiclogout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
