import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staticcard',
  template: `


  <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;700&display=swap" rel="stylesheet">
 <title>Stats Preview Component</title>

 <div class = "container">
 <div class = "card">
 <div class = "card-text-part">
 <div class = "block">
 <h1> Get <span> insights </span> that help your business grow. </h1>
 <p class = "text">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
 <div class ="stats">
  <div class ="stats-block">
  <div class ="stats-num">10k+</div>
  <title>Companies</title>
  </div>
  <div class ="stats-num">314</div>
  <title>Templates</title>
  </div>
  <div class ="stats-num">12M+</div>
  <title>Queries</title>
  </div>
  
 
 
 </div>
 </div>

 <div>
 <div class ="card-img- part">
 </div>
 
 
 
 

  
  
  
  
  
  
  
  
  
  
  
  
  
  `,
  styleUrls: ['./staticcard.component.css']
})
export class StaticcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
