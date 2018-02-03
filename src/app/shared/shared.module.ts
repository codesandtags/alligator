import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    PageNotFoundComponent
  ],
  declarations: [
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {
}
