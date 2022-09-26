import { Component, OnInit } from '@angular/core';
import {   FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  groupForm!: FormGroup;
  destination = []
  maxGroupSize = ['select max group size', '4', '5', '6', '7', '8', '9', '10']
  submit!: boolean;
  //phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')] )
  constructor(private form: FormBuilder, private router: Router) { 
    this.groupForm = form.group({
      groupName: [null, [Validators.required]],
      destination: [null, [Validators.required]],
      sponsorName: [null, [Validators.required]],
      phone: [null, Validators.compose([Validators.required, Validators.pattern('[- +()0-9]+')])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      maxGroupSize:[null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(formValues: any): void {
    this.submit = true;
    this.router.navigate(['group']);
  }

  getErrorMessage() {
    if (this.groupForm.hasError('required')) {
      return 'You must enter an email';
    }
    return this.groupForm.hasError('email') ? 'Not a valid entry' : '';
  }


}
