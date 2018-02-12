import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './modules/auth/auth.service';
import { AuthGuard } from './modules/auth/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { QuestionService } from './shared/components/question/question.service';
import { UiService } from './shared/services/ui.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot({ui: appReducer})
  ],
  providers: [
    AuthService,
    AuthGuard,
    QuestionService,
    UiService
  ],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
