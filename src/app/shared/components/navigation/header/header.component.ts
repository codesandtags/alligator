import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../../modules/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.handleAuth();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  public onToggleSideNav(): void {
    this.sideNavToggle.emit();
  }

  public onLogout(): void {
    this.authService.logout();
  }

  private handleAuth() {
    this.authSubscription = this.authService
      .authChange.subscribe(authStatus => {
        this.isAuth = authStatus;
      });
  }
}
