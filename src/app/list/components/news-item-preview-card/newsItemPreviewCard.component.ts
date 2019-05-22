import { Component, Input } from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-news-item-preview-card',
  templateUrl: 'newsPreviewCard.component.html',
  styleUrls: ['newsPreviewCard.component.scss'],
})
export class NewsItemPreviewCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
}
