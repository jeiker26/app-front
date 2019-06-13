import { NgModule } from '@angular/core';
import { MinTwoDigitsPipe } from './min-two-digits.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MinTwoDigitsPipe],
  exports: [MinTwoDigitsPipe],
  imports: [CommonModule],
})
export class PipesModule {}
