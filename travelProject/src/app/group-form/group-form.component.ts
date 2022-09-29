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
  destinations!: Destination[];
  groups!: Group[];
  errorMessage!: string;
  newGroup: Group = new Group();
  maxGroupSize!: number[];

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
      maxGroupSize: [1, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.maxGroupSize= [1, 2, 3, 4, 5]

    this.groupForm.valueChanges.subscribe((value) => {
      this.newGroup.GroupName = value.groupName;
      this.newGroup.SponsorName = value.sponsorName;
      this.newGroup.SponsorEmail = value.email;
      this.newGroup.SponsorPhone = value.phone;
      this.newGroup.OrganizationName = value.destination;
      this.newGroup.MaxGroupSize = value.maxGroupSize;
    });

    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations.filter((destination)=>{
        return destination.OrganizationName !== 'Coming Soon'
      });
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
        window.location.reload();
      },
    });
  }

  onSubmit(): void {
    if (this.groupForm.invalid) {
      console.log('submitGoal(): this.groupForm.invalid = true ');
      return;
    }
    this.insertGroup(this.newGroup);
  }
}
