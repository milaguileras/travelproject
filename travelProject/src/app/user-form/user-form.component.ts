import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationsService } from '../services/destination.service';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
  regForm!: FormGroup;
  submit!: boolean;
  destinations!: Destination[]

  constructor(private fb: FormBuilder, private router: Router, private destinationService: DestinationsService) {
    this.regForm = fb.group({
      name: [null, [Validators.required]],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null, [Validators.required]],
      destination: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.regForm.valueChanges.subscribe((value) => console.log(value));
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations
      console.log(this.destinations);
    })
  }

  canDeactivate(): boolean {
    console.log(!this.regForm.touched);
    return !this.regForm.touched || this.submit;
  }

  onSubmit(formValues: any): void {
    this.submit = true;
    this.router.navigate(['myPlate']);
  }

}