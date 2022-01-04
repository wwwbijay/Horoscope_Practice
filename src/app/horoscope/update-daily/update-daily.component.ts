import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from 'src/app/Dialogs/create/create.component';

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
}
