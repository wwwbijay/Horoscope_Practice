import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardHomeComponent } from './Routing/dashboard-home/dashboard-home.component';
import { HoroscopeHomeComponent } from './Routing/horoscope-home/horoscope-home.component';
import { PaymentMgmtHomeComponent } from './Routing/payment-mgmt-home/payment-mgmt-home.component';
import { SettingsHomeComponent } from './Routing/settings-home/settings-home.component';
import { UserManagementHomeComponent } from './Routing/user-management-home/user-management-home.component';
import { AuthGuard } from './shared/auth.guard'; 

const routes: Routes = [
  {
    component: DashboardHomeComponent,
    path: '',
    canActivate: [AuthGuard],
  },

  {
    component: HoroscopeHomeComponent,
    path: 'horoscope'
  },

  {
    component: UserManagementHomeComponent, 
    path: 'usermanagement'
  },

  {
    component: PaymentMgmtHomeComponent,
    path: 'expensemanagement'
  },

  {
    component: SettingsHomeComponent,
    path: 'settings'
  },

  {
    component: LoginComponent,
    path: 'login'
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
