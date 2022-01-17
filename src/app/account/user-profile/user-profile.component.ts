import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UprofileServiceService } from './uprofile-service.service';
import { Userprofile } from '../../interface/userprofile';
 

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html', 
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {  

  currentUser : Userprofile = {
    fullName: '',
    userName: '',
    address: '',
    email: '',
    roles: [],
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    department: '',
    dateOfJoining: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    isActive: true,
    profileImagePath: ''
  }
  testCurrentuser: any;

  constructor( private http: HttpClient, private userservice: UprofileServiceService) {  } 
  
  ngOnInit(): void {
    var mytoken = this.userservice.getToken();
    var username = this.userservice.getUserByToken(mytoken) || 'sorry';

    this.userservice.getUserByUsername(username).subscribe({
      next: (data) => {
        this.testCurrentuser = data;
    console.log(data);

      },

      error: (err:Error) => {
        alert('Error:' + err);
      },
      complete: () => { 
        this.currentUser = this.testCurrentuser;
      }
    });
  }

}
