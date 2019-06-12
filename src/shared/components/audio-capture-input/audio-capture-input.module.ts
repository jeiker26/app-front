import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';

import { TranslateModule } from '@ngx-translate/core';
import { AudioCaptureInputComponent } from './audio-capture-input.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
  ],
  declarations: [
    AudioCaptureInputComponent,
  ],
  exports: [
    AudioCaptureInputComponent,
  ],
  providers: [
    Media,
  ],
})
export class AudioCaptureInputModule { }
