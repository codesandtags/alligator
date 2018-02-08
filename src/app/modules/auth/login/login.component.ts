import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { UrlConstants } from '../../../shared/constants/url-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private authSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.initializeForm();
    this.handleAuth();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  public onSubmit(): void {
    console.log('=> ', this.loginForm);

    if (this.loginForm.valid) {
      this.authService.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      });
    }
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private handleAuth() {
    this.authSubscription = this.authService
      .authChange.subscribe(authStatus => {
        if (authStatus) {
          this.router.navigate([UrlConstants.ROUTES.HOME]);
        }
      });
  }
}
