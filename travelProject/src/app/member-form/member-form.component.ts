import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationsService } from '../services/destination.service';
import { Destination } from '../models/destination.model';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})

export class MemberFormComponent implements OnInit {
  regForm!: FormGroup;
  submit!: boolean;
  destinations!: Destination[];
  groups!: Group[];
  errorMessage!: string;
  newMember: Member = new Member()

  constructor(private form: FormBuilder, private router: Router, private destinationService: DestinationsService, 
    private groupService: GroupService, memberService: MemberService) {
    this.regForm = form.group({
      name: [null, [Validators.required]],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null, [Validators.required]],
      destination: [null, [Validators.required]],
      group: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.regForm.valueChanges.subscribe((value) => console.log(value));
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations.filter((destination)=>{
        return destination.OrganizationName !== 'Coming Soon'
      });
    })
    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups
    })
  }

  canDeactivate(): boolean {
    console.log(!this.regForm.touched);
    return !this.regForm.touched || this.submit;
  }

  onSubmit(formValues: any): void {
    this.submit = true;
    this.router.navigate(['group']);
  }

}