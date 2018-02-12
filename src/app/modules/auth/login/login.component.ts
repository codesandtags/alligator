import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { UiService } from '../../../shared/services/ui.service';
import { Store } from '@ngrx/store';
import { StateModel } from '../../../shared/models/state.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  isWrongPassOrUser = false;
  isLoading$: Observable<boolean>;
  private authSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private uiService: UiService,
              private store: Store<{ ui: StateModel }>) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.listenLoading();
    this.addSubscriptions();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      });
    }
  }

  private addSubscriptions() {
    this.authSubscription = this.authService.authChange
      .subscribe((isAuth) => {
        this.isWrongPassOrUser = false;
        if (!isAuth) {
          this.isWrongPassOrUser = true;
          this.loginForm.get('password').setValue('');
        }
      });
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private listenLoading() {
    this.isLoading$ = this.store.map(state => {
      return state.ui.isLoading;
    });
  }
}
