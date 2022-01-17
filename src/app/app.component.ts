import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  openNav: boolean = true; 

  constructor(public router: Router) { 
  
  } 

  toggleSideNav() {  
    this.openNav = !this.openNav;  
  } 
   
}
