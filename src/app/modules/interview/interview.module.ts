import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewDashboardComponent } from './interview-dashboard/interview-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewRoutingModule
  ],
  declarations: [InterviewDashboardComponent]
})
export class InterviewModule { }
