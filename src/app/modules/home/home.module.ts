import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeDashboardComponent]
})
export class HomeModule {
}
