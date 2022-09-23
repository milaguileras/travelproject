import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')] )

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
