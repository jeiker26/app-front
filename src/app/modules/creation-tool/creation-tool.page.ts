import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-tool',
  templateUrl: 'creation-tool.page.html',
  styleUrls: ['creation-tool.page.scss'],
})
export class CreationToolPage {
  protected displayErrorsSubmit: boolean;
  protected formError: boolean;
  protected loadingForm: boolean;

  creationToolForm = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    location: this.fb.group({
      lat: [''],
      long: [''],
    }),
    price: ['', Validators.compose([Validators.required])],
    image: [''],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.loadingForm = true;
    this.displayErrorsSubmit = false;

    if (!this.creationToolForm.valid) {
      this.loadingForm = false;
      this.displayErrorsSubmit = true;
      return;
    }

    console.log('Send data:');
    console.log(this.creationToolForm.value);
  }
}
