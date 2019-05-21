import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GuidePreviewCardComponent } from './guidePreviewCard.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [GuidePreviewCardComponent],
  exports: [GuidePreviewCardComponent],
})
export class GuidePreviewCardModule {}
