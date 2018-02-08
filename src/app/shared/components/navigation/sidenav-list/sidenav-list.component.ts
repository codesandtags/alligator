import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../../modules/auth/auth.service';
import { UrlConstants } from '../../../constants/url-constants';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeSideNav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  ROUTES = UrlConstants.ROUTES;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.handleAuth();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  public onCloseSideNav(): void {
    this.closeSideNav.emit();
  }

  public onLogout(): void {
    this.authService.logout();
    this.onCloseSideNav();
  }

  private handleAuth() {
    this.authSubscription = this.authService
      .authChange.subscribe(authStatus => {
        this.isAuth = authStatus;
      });
  }

}
