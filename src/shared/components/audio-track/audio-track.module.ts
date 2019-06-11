import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

import { TranslateModule } from '@ngx-translate/core';

import { AudioTrackComponent } from './audio-track.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [
    AudioTrackComponent,
  ],
  exports: [
    AudioTrackComponent,
  ],
  providers: [
    MediaCapture,
    Media,
    File,
  ],
})
export class AudioTrackModule { }
