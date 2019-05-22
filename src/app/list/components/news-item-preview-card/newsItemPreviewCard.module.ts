import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NewsItemPreviewCardComponent } from './newsItemPreviewCard.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [NewsItemPreviewCardComponent],
  exports: [NewsItemPreviewCardComponent],
})
export class NewsItemPreviewCardModule {}
