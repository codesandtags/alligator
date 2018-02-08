import { Injectable } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { AuthDataModel } from '../../shared/models/auth-data.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private user: UserModel;
  authChange = new Subject<boolean>();

  constructor() {
  }

  login(authData: AuthDataModel) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
  }

  getUser(): UserModel {
    return {...this.user};
  }

  isAuth(): boolean {
    return this.user !== null && this.user !== undefined;
  }
}
