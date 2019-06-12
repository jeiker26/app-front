import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { AudioTrackModule } from '../../components/audio-track/audio-track.module';
import { AudioCaptureInputModule } from '../../components/audio-capture-input/audio-capture-input.module';

import { AudioCaptureAndPlayerComponent } from './audio-capture-and-player.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    AudioTrackModule,
    AudioCaptureInputModule,
  ],
  declarations: [
    AudioCaptureAndPlayerComponent,
  ],
  exports: [
    AudioCaptureAndPlayerComponent,
  ],
})
export class AudioCaptureAndPlayerModule { }
