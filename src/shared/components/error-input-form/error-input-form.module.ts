import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInputFormComponent } from './error-input-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    ErrorInputFormComponent,
  ],
  exports: [
    ErrorInputFormComponent,
  ],
})
export class ErrorInputFormModule { }
