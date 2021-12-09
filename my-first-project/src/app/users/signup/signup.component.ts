import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
  <h1>
  Hello there
  </h1>
  <h2>
  Welcome to page
  </h2>
  <h1>{{name}}</h1>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 name="Jimmy"
}
