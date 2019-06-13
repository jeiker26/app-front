import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-image-capture-input',
  templateUrl: 'image-capture-input.html',
  styleUrls: ['./image-capture-input.scss'],
})
export class ImageCaptureInputComponent {
  constructor(public translate: TranslateService) {
  }
}
