import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

import { AudioTrackModule } from '../audio-track/audio-track.module';

import { TranslateModule } from '@ngx-translate/core';

import { AudioCaptureInputComponent } from './audio-capture-input.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    AudioTrackModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [
    AudioCaptureInputComponent,
  ],
  exports: [
    AudioCaptureInputComponent,
  ],
  providers: [
    MediaCapture,
    Media,
    File,
  ],
})
export class AudioCaptureInputModule { }
