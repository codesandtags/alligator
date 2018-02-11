import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { UiService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  isWrongPassOrUser = false;
  isLoading = false;
  private loadingSubscription: Subscription;
  private authSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private uiService: UiService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.addSubscriptions();
    this.listenLoading();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
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
    this.loadingSubscription = this.uiService.loadingStateChange
      .subscribe(isLoading => {
        this.isLoading = isLoading;
      });
  }
}
