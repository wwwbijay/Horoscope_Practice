import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  openNav: boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toggleSideNav() {  
    this.openNav = !this.openNav;  
  } 
  

}
