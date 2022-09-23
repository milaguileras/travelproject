import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  links = [
    {'name': 'Register ',
    'route': 'register'},
    {'name': 'Destinations ',
    'route': 'destination'},
    {'name': 'Group Page ',
    'route': 'group-page'},
    {'name': 'User Page ',
    'route': 'user-page'},
    {'name': 'Login ',
    'route': 'login'},
  ]
  constructor() { }

  ngOnInit(): void {  }

}
