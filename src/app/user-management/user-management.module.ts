import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './Dialogs/user-management/create-user/create-user.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UsermanagementComponent } from './usermanagement.component';
import { EditUserComponent } from './Dialogs/user-management/edit-user/edit-user.component';
import { DeleteUserComponent } from './Dialogs/user-management/delete-user/delete-user.component';
import { PreviewUserComponent } from './Dialogs/user-management/preview-user/preview-user.component';
import { ResetUserComponent } from './Dialogs/user-management/reset-user/reset-user.component'; 
import { HttpClientModule } from '@angular/common/http';
import { CreateRolesComponent } from './Dialogs/user-roles/create-roles/create-roles.component';


@NgModule({
  declarations: [
  // CreateComponent
    CreateUserComponent,
    UserRolesComponent,
    UsermanagementComponent,
    EditUserComponent,
    DeleteUserComponent,
    PreviewUserComponent,
    ResetUserComponent,
    CreateRolesComponent,
  ],
  imports: [ 
    CommonModule,
    UserManagementRoutingModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserManagementModule { }
