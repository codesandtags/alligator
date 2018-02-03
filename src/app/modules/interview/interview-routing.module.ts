import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewDashboardComponent } from './interview-dashboard/interview-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: InterviewDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule {
}
