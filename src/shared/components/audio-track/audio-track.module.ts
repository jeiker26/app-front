import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

import { AudioTrackComponent } from './audio-track.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    PipesModule,
  ],
  declarations: [
    AudioTrackComponent,
  ],
  exports: [
    AudioTrackComponent,
  ],
})
export class AudioTrackModule { }
