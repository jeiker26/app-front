import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { ImageCaptureInputComponent } from './image-capture-input.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
  ],
  declarations: [
    ImageCaptureInputComponent,
  ],
  exports: [
    ImageCaptureInputComponent,
  ],
})
export class ImageCaptureInputModule { }
