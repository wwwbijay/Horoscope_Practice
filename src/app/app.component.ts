import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openNav: boolean = true; 

  constructor(public router: Router) { 
  
  } 

  toggleSideNav() {  
    this.openNav = !this.openNav;  
  } 
   
}
