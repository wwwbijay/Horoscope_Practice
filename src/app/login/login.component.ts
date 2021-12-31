import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: String = "Rachana";
  pword: String = "1234567";

  loginform = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor( private router: Router) { }
  ngOnInit(): void {
  }

  loginUser() {
    if (this.loginform.value.user === this.name && this.loginform.value.password === this.pword) {
      // alert('Login Sucessful');
      localStorage.setItem('token', "hwuheqwoeqo.fwirhiow") 
      this.router.navigate(['']);
    }

    else{
      alert('Please enter correct name & password ');
    }    
     
  }

  get user() {
    return this.loginform.get('user');
  }

  get password() {
    return this.loginform.get('password'); 
  }

}
