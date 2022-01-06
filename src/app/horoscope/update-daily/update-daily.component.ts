import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
// import { UserService } from '../services/user.service'; 
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from 'src/app/Dialogs/update-daily/create-daily/create.component';
import { DeleteDailyComponent } from 'src/app/Dialogs/update-daily/delete-daily/delete-daily.component';
import { PreviewDailyComponent } from 'src/app/Dialogs/update-daily/preview-daily/preview-daily.component';
import { EditDailyComponent } from 'src/app/Dialogs/update-daily/edit-daily/edit-daily.component';

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
