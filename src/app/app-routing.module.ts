import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { LoginComponent } from './login/login.component';
import { DashboardHomeComponent } from './horoscope/dashboard-home/dashboard-home.component';
import { HoroscopeHomeComponent } from './horoscope/horoscope-home/horoscope-home.component';
import { PaymentMgmtHomeComponent } from './horoscope/payment-mgmt-home/payment-mgmt-home.component';
import { SettingsHomeComponent } from './horoscope/settings-home/settings-home.component';
import { UserManagementHomeComponent } from './horoscope/user-management-home/user-management-home.component';
import { AuthGuard } from './Authorization/auth.guard'; 

const routes: Routes = [

  {
    component: ControlPanelComponent,
    path: '',
    canActivate: [AuthGuard],

    children: [{
      component: DashboardHomeComponent,
      path: 'dashboard',
      canActivate: [AuthGuard],
    },
  
    {
      component: HoroscopeHomeComponent,
      path: 'horoscope',
      canActivate: [AuthGuard],
    },
  
    {
      component: UserManagementHomeComponent, 
      path: 'usermanagement',
      canActivate: [AuthGuard],
    },
  
    {
      component: PaymentMgmtHomeComponent,
      path: 'expensemanagement',
      canActivate: [AuthGuard],
    },
  
    {
      component: SettingsHomeComponent,
      path: 'settings',
      canActivate: [AuthGuard],
    },]
  },  

  {
    component: LoginComponent,
    path: 'login',
    // canActivate: [AuthGuard],
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
