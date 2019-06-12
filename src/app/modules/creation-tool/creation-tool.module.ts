import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CreationToolPage } from './creation-tool.page';
import { ErrorInputFormModule } from '../../../shared/components/error-input-form/error-input-form.module';
import { AudioCaptureAndPlayerModule } from '../../../shared/ui-components/audio-capture-and-player/audio-capture-and-player.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ErrorInputFormModule,
    TranslateModule,
    AudioCaptureAndPlayerModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreationToolPage,
      },
    ]),
    TranslateModule,
  ],
  declarations: [CreationToolPage],
})
export class CreationToolModule {}