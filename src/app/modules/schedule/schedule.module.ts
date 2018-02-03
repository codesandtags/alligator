import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleDashboardComponent } from './schedule-dashboard/schedule-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ],
  declarations: [ScheduleDashboardComponent]
})
export class ScheduleModule { }
