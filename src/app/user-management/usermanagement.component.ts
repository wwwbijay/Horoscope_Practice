import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserManagementService } from './user-management.service';
import { Userprofile } from '../interface/userprofile';
import { CreateUserComponent } from './Dialogs/user-management/create-user/create-user.component';
import { EditUserComponent } from './Dialogs/user-management/edit-user/edit-user.component';
import { PreviewUserComponent } from './Dialogs/user-management/preview-user/preview-user.component';
import { DeleteUserComponent } from './Dialogs/user-management/delete-user/delete-user.component';
import { ResetUserComponent } from './Dialogs/user-management/reset-user/reset-user.component';
import { IRoles } from '../interface/iroles';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {  
  allUsers!: [Userprofile];
  allRoles: IRoles [] = [];
  
  
  constructor( 
    public dialogRef:MatDialog,
    public router: Router,
    private _userservices: UserManagementService 
    ) { } 

  ngOnInit(): void {  
    
    this.assignAllUsers();
    this.assignAllRoles();
    
  }


  // createUser(){
  //   console.log( this.allRoles);
  //   this.dialogRef.open(CreateUserComponent, {
  //     data: this.allRoles
  //   });
  // } 

  editUser(){
    this.dialogRef.open(EditUserComponent);
  }

  previewUser(){
    this.dialogRef.open(PreviewUserComponent);
  }

  deleteUser(){
    this.dialogRef.open(DeleteUserComponent);
  }

  resetUser(){
    this.dialogRef.open(ResetUserComponent);
  } 

  assignAllUsers(){
    let testCurrentuser:any;
    this._userservices.getAllusers().subscribe({ 
      next: (data) => {
        testCurrentuser = data; 
      },
      error: (err: Error) => {
        alert('Error:' + err);
      }, 
      complete: () => { 
        this.allUsers = testCurrentuser.users;  
      }
    })
  }

  assignAllRoles(){
    let roles:any;  
    this._userservices.getAllRoles().subscribe({ 
      next: (data) => {
        roles  = data;
        console.log(roles);        
      },
      error: (err: Error) => {
        alert('Error:' + err); 
      },
      complete: () => { 
        roles.roles.forEach((data: { roleName: any }) =>{
          var i=1;
          var RoleObject: IRoles = {
            rid: i++,
            name: data.roleName,
            isselected: false
          };
          this.allRoles.push( RoleObject );  
       });
       
      //  this.allRoles =  roles.roles;
      //  console.log(this.allRoles );
      },
    })
  }
} 
