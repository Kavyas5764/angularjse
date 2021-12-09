import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  name="Kavya";
  address="Mangalore";
  getName(){
    return this.name;
  }
  getAddress(){
    return this.address;
  }
  arr = [1,2,3,4,5];
  person = {
  name:"Kavya S"
};
}


