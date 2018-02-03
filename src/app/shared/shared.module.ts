import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FooterComponent
  ],
  declarations: [FooterComponent]
})
export class SharedModule {
}
