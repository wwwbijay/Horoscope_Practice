import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authorization/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { PaymentmanagementComponent } from './payment-management/paymentmanagement.component';
import { UsermanagementComponent } from './user-management/usermanagement.component';

import { HoroscopeRoutingModule } from './horoscope/horoscope-routing.module';
import { UserManagementRoutingModule } from './user-management/user-management-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component';
import { AccountRoutingModule } from './account/account-routing.module';
import { ChangePasswordComponent } from './account/change-password/change-password.component';

const routes: Routes = [
  //DASHBOARD COMPONENT
  {
    component: DashboardComponent,
    path: '',
    data: {
      breadcrumb: 'Home',
    },
    canActivate: [AuthGuard],
    children: [
      {
        component: HoroscopeComponent,
        path: 'horoscope',
        data: {
          breadcrumb: 'Horoscope',
        },
        canActivate: [AuthGuard],
        loadChildren: () => HoroscopeRoutingModule,
      },

      //USERPROFILE COMPONENT
      {
        path: 'userprofile',
        data: {
          breadcrumb: 'User Profile'
        },
        children: [
          {
            path: '',
            component: UserProfileComponent,
          },
          {
            path: ':id',
            component: UserProfileComponent,
          },
        ],
      },
    
      {
        path: 'changepassword',
        component: ChangePasswordComponent,
        data: {
          breadcrumb: 'Change Password'
        },
        canActivate: [AuthGuard]
      },
    

      // USER MANAGEMENT COMPONENT
      {
        component: UsermanagementComponent,
        path: 'usermanagement',
        data: {
          breadcrumb: 'User Management',
        },
        canActivate: [AuthGuard],
        loadChildren: () => UserManagementRoutingModule,
      },

      //PAYMENT COMPONENT
      {
        component: PaymentmanagementComponent,
        path: 'paymentmanagement',
        data: {
          breadcrumb: 'Payment Management',
        },
        canActivate: [AuthGuard],
      },

      //SETTINGS COMPONENT
      {
        component: SettingsComponent,
        path: 'settings',
        data: {
          breadcrumb: 'Settings',
        },
        canActivate: [AuthGuard], 
      },
    ],
  },

  //LOGIN COMPONENT
  { 
    component: LoginComponent,
    path: 'login',
    // canActivate: [AuthGuard],
  },

  //ACCOUNT COMPONENT
 
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
