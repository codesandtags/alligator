import { Injectable } from '@angular/core';
import { AuthDataModel } from '../../shared/models/auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { UrlConstants } from '../../shared/constants/url-constants';
import { AngularFireAuth } from 'angularfire2/auth';
import { UiService } from '../../shared/services/ui.service';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router,
              private fireAuth: AngularFireAuth,
              private uiService: UiService) {
  }

  login(authData: AuthDataModel) {
    this.uiService.loadingStateChange.next(true);
    this.fireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(data => {
        this.isAuthenticated = true;
        this.router.navigate([UrlConstants.ROUTES.HOME]);
        this.authChange.next(true);
        this.uiService.loadingStateChange.next(false);
      })
      .catch(error => {
        console.error(error);
        this.authChange.next(false);
        this.uiService.loadingStateChange.next(false);
      });
  }

  logout(): void {
    this.authChange.next(false);
    this.isAuthenticated = false;
    this.router.navigate([UrlConstants.ROUTES.LOGIN]);
    this.fireAuth.auth.signOut();
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }
}
