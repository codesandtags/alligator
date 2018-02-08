import { Injectable } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { AuthDataModel } from '../../shared/models/auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { UrlConstants } from '../../shared/constants/url-constants';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private user: UserModel;

  constructor(private router: Router) {
  }

  login(authData: AuthDataModel) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate([UrlConstants.ROUTES.HOME]);
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate([UrlConstants.ROUTES.LOGIN]);
  }

  getUser(): UserModel {
    return {...this.user};
  }

  isAuth(): boolean {
    return this.user !== null && this.user !== undefined;
  }
}
