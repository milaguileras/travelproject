import { Component, OnInit } from '@angular/core';
import {   FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { Destination } from '../models/destination.model';
import { Group } from '../models/group.model';
import { DestinationsService } from '../services/destination.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  groupForm!: FormGroup;
  submit!: boolean;
  destinations!: Destination[]
  groups!: Group[]
  errorMessage!: string;

  constructor(private form: FormBuilder, private router: Router, private destinationService: DestinationsService, 
    private groupService: GroupService) {
    this.groupForm = form.group({
      groupName: [null, [Validators.required]],
      sponsorName: [null, [Validators.required]],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null, [Validators.required]],
      destination: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.groupForm.valueChanges.subscribe((value) => console.log(value));
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations
    });
    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups
    });
  }

  canDeactivate(): boolean {
    console.log(!this.groupForm.touched);
    return !this.groupForm.touched || this.submit;
  }

  insertGroup(group: Group): void {
    this.groupService.addGroups(group).subscribe({
      next: (group) => {
        this.groupService.getGroups();
      },
    });
  }

  onSubmit(group: Group): void {
    if (this.groupForm.invalid) {
      console.log('submitGoal(): this.groupForm.invalid = true ');
      return;
    }
    if (group.GroupId === null || group.GroupId < 1) {
      this.insertGroup(group);
      window.location.reload();
    }
  }
}
