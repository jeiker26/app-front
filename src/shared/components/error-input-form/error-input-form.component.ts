import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-input-form',
  templateUrl: 'error-input-form.html',
  styleUrls: ['./error-input-form.scss'],
})
export class ErrorInputFormComponent implements OnInit {
  @Input('displayErrorsSubmit') showError: boolean;
  @Input('form') formControl: FormGroup;
  @Input('item') item: string; // Example: for subGroup: nameSubGroup.item
  currentItem: any;

  ngOnInit() {
    // Split the element by the point and thus access the subgroup
    let auxCurrentItem = this.formControl.controls;
    this.item
      .split('.')
      .forEach((ctrl, idx, array) => {
        if (idx === array.length - 1) {
          this.currentItem = auxCurrentItem[ctrl];
          return;
        }
        auxCurrentItem = auxCurrentItem[ctrl]['controls'];
      });
  }
}
