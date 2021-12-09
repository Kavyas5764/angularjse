import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveyform',
  template: `
  <style>
    form{
      text-align:center;
    }
  
  
  </style>
  <body>
  <div class = "survey-form">
  <form action ="#" method="post">
  <h1>Employees Interests Survey form</h1>
  <p>Enter your name:</p>
  <input type="text" name="fullname" placeholder="">
  <p>Enter your department:</p>
  <input type="text" name="department" placeholder="">
  <p>Tell us a little about yourself:</p>
  <textarea rows="4" cols="50">
  </textarea>
  <p>Do you exercise at home</p>
  <input type = "radio" name = "subject" value = "yes"> Yes
  <input type = "radio" name = "subject" value = "no"> No

  <p>How do you like to read about your favorite topics?</p>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="books"> Books</label><br>
  <input type="checkbox" id=" resources" name=" resources" value=" books">

  <label for=" resources"> Online resources</label><br>
  <input type="checkbox" id="resources" name="resources" value="resources">

  <label for="Phone apps"> Phone apps</label><br><br>
  
  <p>What genre of movies do you like?</p>
    <select>
      <option>comedy</option>
      <option>Horror</option>
      <option>adventure</option>
      <option>fiction</option>
    
    </select><br><br>


  <input type="submit" value="Submit">
  </form>
  </div>
  </body>
  
  
  
  
  
  
  
  
  
  `,
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
