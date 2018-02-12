import { Injectable } from '@angular/core';
import { AuthDataModel } from '../../shared/models/auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { UrlConstants } from '../../shared/constants/url-constants';
import { AngularFireAuth } from 'angularfire2/auth';
import { UiService } from '../../shared/services/ui.service';
import { Store } from '@ngrx/store';
import { StateModel } from '../../shared/models/state.model';
import { AppActions } from '../../app.actions';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router,
              private fireAuth: AngularFireAuth,
              private uiService: UiService,
              private store: Store<{ ui: StateModel }>) {
  }

  login(authData: AuthDataModel) {
    this.store.dispatch({type: AppActions.START_LOADING});

    this.fireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(data => {
        this.isAuthenticated = true;
        this.router.navigate([UrlConstants.ROUTES.HOME]);
        this.authChange.next(true);
        this.store.dispatch({type: AppActions.STOP_LOADING});
      })
      .catch(error => {
        console.error(error);
        this.authChange.next(false);
        this.store.dispatch({type: AppActions.STOP_LOADING});
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
