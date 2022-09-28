import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from '../models/destination.model';
import { Group } from '../models/group.model';
import { DestinationsService } from '../services/destination.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  destinations!: Destination[]
  groups!: Group[]

  constructor(private router: Router, private destinationService: DestinationsService, 
    private groupService: GroupService) {
  }


  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations
    })
    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups
    })
  }
}
