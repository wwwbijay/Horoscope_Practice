import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { UserService } from 'src/app/horoscope/update-daily/user.service';
// import { UserService } from '../services/user.service'; 
import { MatDialog } from '@angular/material/dialog';

import { DeleteDailyComponent } from '../Dialogs/update-daily/delete-daily/delete-daily.component';
import { PreviewDailyComponent } from '../Dialogs/update-daily/preview-daily/preview-daily.component'; 
import { EditDailyComponent } from '../Dialogs/update-daily/edit-daily/edit-daily.component';
import { CreateComponent } from '../Dialogs/update-daily/create-daily/create.component';

@Component({
  selector: 'app-update-daily',
  templateUrl: './update-daily.component.html', 
  styleUrls: ['./update-daily.component.css'],   
})  

export class UpdateDailyComponent implements OnInit { 
  listUsers!: any;
  constructor(
    private userdataService: UserService, 
    private dialogRef: MatDialog
  ) {
    this.getusers();
  }
  ngOnInit(): void {}

  getusers() {
    // console.log(this.userdataService.listUsers());
    console.log(this.userdataService.listUsers());
    this.userdataService.listUsers().subscribe((data) => {
      this.listUsers = data;
    });
  }

  openDialog(){
    this.dialogRef.open(CreateComponent);
  }

  editDaily(){
    this.dialogRef.open(EditDailyComponent);
  }

  previewDaily(){
    this.dialogRef.open(PreviewDailyComponent);
  }

  deleteDaily(){
    this.dialogRef.open(DeleteDailyComponent);
  } 
}
