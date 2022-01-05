import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
// import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AuthGuard } from './Authorization/auth.guard'; 
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component'; 

import { HoroscopeComponent } from './horoscope/horoscope.component';
// import { ManageComponent } from './horoscope/manage/manage.component';
// import { ManageComponent } from './horoscope/manage/manage.component';

import { UpdateDailyComponent } from './horoscope/update-daily/update-daily.component';
import { UpdateMonthlyComponent } from './horoscope/update-monthly/update-monthly.component';
import { UpdateWeeklyComponent } from './horoscope/update-weekly/update-weekly.component';
import { UpdateYearlyComponent } from './horoscope/update-yearly/update-yearly.component';

import { UsermanagementComponent } from './user-management/usermanagement/usermanagement.component';

import { PaymentmanagementComponent } from './payment-management/paymentmanagement/paymentmanagement.component';

import { SettingsComponent } from './settings/settings/settings.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', component: DashboardComponent }, // Wildcard Route
  {
    component: DashboardComponent,
    path: '',
    data:{
      breadcrumb: 'Home'
    },
    canActivate: [AuthGuard],
    children:[
      {
        component: HoroscopeComponent,
        path: 'horoscope',
        data:{
          breadcrumb: 'Horoscope'
        },
        canActivate: [AuthGuard],
        children: [
          // {
          //   component: ManageComponent,
          //   path: 'manage',
          //   data:{
          //     breadcrumb: 'Manage'
          //   },
          //   canActivate: [AuthGuard],
          // },
        
          {
            component: UpdateDailyComponent, 
            path: 'update-daily',
            data:{
              breadcrumb: 'Update Daily Component'
            },
            canActivate: [AuthGuard],
          },
        
          {
            component: UpdateWeeklyComponent,
            path: 'update-weekly',
            data:{
              breadcrumb: 'Update Weekly Component'
            },
            canActivate: [AuthGuard],
          },
        
          {
            component: UpdateMonthlyComponent,
            path: 'update-monthly',
            data:{
              breadcrumb: 'Update Monthly Component'
            },
            canActivate: [AuthGuard],
          },
          {
            component: UpdateYearlyComponent,
            path: 'update-yearly',
            data:{
              breadcrumb: 'Update Yearly Component'
            },
            canActivate: [AuthGuard],
          }
        ]
      },
      {
        component: UsermanagementComponent,
        path: 'usermanagement',
        data:{
          breadcrumb: 'Usermanagement'
        },
        canActivate: [AuthGuard],
      },

      
    {
      component: PaymentmanagementComponent,
      path: 'paymentmanagement',
      data:{
        breadcrumb: 'Payment Management'
      },
      canActivate: [AuthGuard],
    },

    
    {
      component:SettingsComponent,
      path: 'settings',
      data:{
        breadcrumb: 'Settings'
      },
      canActivate: [AuthGuard],
    },
      
    ]
  },

  {
    component: LoginComponent,
    path: 'login',
    // canActivate: [AuthGuard],
    
  },

  { 
    path: '**', 
    pathMatch: 'full', 
    redirectTo: ''
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
