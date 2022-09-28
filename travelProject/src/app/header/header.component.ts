import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http'; 
import { DestinationsService } from '../services/destination.service';
import { GroupService } from '../services/group.service';
import { Destination } from '../models/destination.model';
import { Group } from '../models/group.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  links = [
    {'name': 'Destinations ',
    'route': 'destination'},
    {'name': 'Register a Tour',
    'route': 'register'},
    {'name': 'Group Page ',
    'route': 'group'},
    {'name': 'Sign Up ',
    'route': 'signup'},
    {'name': 'Login ',
    'route': 'login'},
  ]
  destinations!: Destination[]
  groups!: Group[]

  constructor(private destinationService: DestinationsService, private groupService: GroupService) { }

  ngOnInit(): void { 
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations
    })
    this.groupService.getGroups().subscribe((groups) => {
      this.groups = groups
    })
  }

}
