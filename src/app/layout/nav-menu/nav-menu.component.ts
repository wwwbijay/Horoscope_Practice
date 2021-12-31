import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu', 
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input() openNav!: Boolean;
  @Output() openSideNavFromChild= new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openFromChild(){
    
    this.openSideNavFromChild.emit();
  }

}



