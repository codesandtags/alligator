import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { RouterModule } from '@angular/router';
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionDetailComponent } from './components/question/question-detail/question-detail.component';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    PageNotFoundComponent,
    SidenavListComponent,
    HeaderComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    ApplicantProfileComponent
  ],
  providers: [],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidenavListComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    ApplicantProfileComponent
  ]
})
export class SharedModule {
}

