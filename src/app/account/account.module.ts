import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,  
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
