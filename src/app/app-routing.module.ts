import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/modules/auth/auth.module#AuthModule'
  },
  {
    path: 'reports',
    loadChildren: 'app/modules/reports/reports.module#ReportsModule'
  },
  {
    path: 'interview',
    loadChildren: 'app/modules/interview/interview.module#InterviewModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/modules/admin/admin.module#AdminModule'
  },
  {
    path: 'schedule',
    loadChildren: 'app/modules/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'home',
    loadChildren: 'app/modules/home/home.module#HomeModule'
  },
  {
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
