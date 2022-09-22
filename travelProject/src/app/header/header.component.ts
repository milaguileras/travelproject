import { Component, OnInit } from '@angular/core';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    'Register ',
    'Destinations ',
    'Group Page ',
    'User Page ',
    'Login ',
  ]
  cards= []
  constructor() { }

  ngOnInit(): void {
  }

}
