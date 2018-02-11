import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { UrlConstants } from '../../shared/constants/url-constants';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
  {
    path: UrlConstants.ROUTES.ADMIN_ADD_QUESTION,
    component: QuestionFormComponent
  },
  {
    path: UrlConstants.ROUTES.ADMIN_EDIT_QUESTION + ':id',
    component: QuestionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
