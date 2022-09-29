import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Destination } from '../models/destination.model';
import { Group } from '../models/group.model';
import { Member } from '../models/member.model';
import { DestinationsService } from '../services/destination.service';
import { GroupService } from '../services/group.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  panelOpenState = false;
  destinations!: Destination[];
  groups!: Group[];
  member!: Member[];

  constructor(private router: Router, private destinationService: DestinationsService, 
    private groupService: GroupService, private memberService: MemberService) {}

  ngOnInit(): void {
    forkJoin({
      destinations: this.destinationService.getDestinations(), 
      groups: this.groupService.getGroups()}
    ).subscribe((value)=>{
      console.log(value)
      console.log(this.member)
      this.destinations = value.destinations.map((destination, index)=>{
        return {
          ...destination,
          Groups: value.groups.filter((group) => {
            return group.OrganizationName === destination.OrganizationName
          })
        };
      });
    });
  }
}
