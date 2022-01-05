import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; 
import { CreateManageComponent } from '../Dialogs/create-manage/create-manage.component';
import { HoroscopeDashboardService } from '../services/horoscope-dashboard.service';
 
@Component({
  selector: 'app-horoscope', 
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})
export class HoroscopeComponent implements OnInit {
  listUsers!: any;
  constructor(
    private horoscopedataservice: HoroscopeDashboardService,
    public router: Router,
    private dialogRef: MatDialog
    ) { 
      this.get_horoscope();
    }

  ngOnInit(): void {}

  get_horoscope() {
    console.log(this.horoscopedataservice.listUsers());
    this.horoscopedataservice.listUsers().subscribe((data) => {
      this.listUsers = data;
    });
  }

  openDialog(){
    this.dialogRef.open(CreateManageComponent);
  }

}
