import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minTwoDigits',
})
export class MinTwoDigitsPipe implements PipeTransform {
  transform(value: number) {
    return (value < 10 ? '0' : '') + value;
  }
}
