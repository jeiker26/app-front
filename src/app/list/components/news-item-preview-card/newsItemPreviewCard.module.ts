import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { NewsItemPreviewCardComponent } from './newsItemPreviewCard.component';

@NgModule({
  imports: [CommonModule, IonicModule, TranslateModule],
  declarations: [NewsItemPreviewCardComponent],
  exports: [NewsItemPreviewCardComponent],
})
export class NewsItemPreviewCardModule {}
