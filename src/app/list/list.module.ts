import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NewsItemPreviewCardModule } from './components/news-item-preview-card/newsItemPreviewCard.module';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    NewsItemPreviewCardModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
      },
    ]),
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
