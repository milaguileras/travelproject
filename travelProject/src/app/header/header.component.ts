import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  links = [
    'Register ',
    'Destinations ',
    'Group Page ',
    'User Page ',
    'Login ',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
