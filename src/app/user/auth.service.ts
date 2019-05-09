import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    console.log(`logging ${userName} with password: ${password}`);
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Jim',
      lastName: 'Doe'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
