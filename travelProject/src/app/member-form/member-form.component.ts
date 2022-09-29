import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationsService } from '../services/destination.service';
import { Destination } from '../models/destination.model';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  memberForm!: FormGroup;
  submit!: boolean;
  destinations!: Destination[];
  groups!: Group[];
  groupsFiltered!: Group[];
  errorMessage!: string;
  newMember: Member = new Member();
  //kr
  selectedGroup!: number;
  @ViewChild('groupChoice') groupChoice!: ElementRef;

  constructor(
    private form: FormBuilder,
    private router: Router,
    private destinationService: DestinationsService,
    private groupService: GroupService,
    private memberService: MemberService
  ) 
  {
    this.memberForm = form.group({
      name: [null, [Validators.required]],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null, [Validators.required]],
      destination: [null, [Validators.required]],
      group: [null, [Validators.required]],
    });
  };

  ngOnInit(): void {
    this.memberForm.valueChanges.subscribe((value) => {
      this.newMember.MemberEmail = value.email;
      this.newMember.MemberName = value.name;
      this.newMember.MemberPhone = value.phone;
      // if (value.destination)
      console.log(value)
    });

    this.memberForm.get('destination')?.valueChanges.subscribe((value)=> {
      if(value){
        this.groupsFiltered = this.groups.filter((group)=>{
          return group.OrganizationName === value
        })
      }
    });

    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations.filter((destination) => {
        return destination.OrganizationName !== 'Coming Soon';
      });
    });

    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups;
      console.log(groups);
    });
  };

  canDeactivate(): boolean {
    console.log(!this.memberForm.touched);
    return !this.memberForm.touched || this.submit;
  };

  insertMember(groupId: number, member: Member): void {
    console.log(groupId);
    console.log(member);
    console.log(this.newMember);
    this.memberService.addMembertoGroup(groupId, this.newMember).subscribe({
      next: (newMember) => {
        console.log(groupId);
        window.location.reload();
      },
    });
  };

  getSelectedGroup(): void {
    this.selectedGroup = this.groupChoice.nativeElement.value;
    //console.log(this.selectedGroup);
  };

  onSubmit(formValues: any): void {
    this.selectedGroup = this.groupChoice.nativeElement.value;
    console.log(this.groupChoice.nativeElement);
    const groupID = this.selectedGroup;
    //console.log(this.selectedGroup);
    this.insertMember(groupID, formValues);
  };
}
