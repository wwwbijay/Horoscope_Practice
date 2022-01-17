import { NgModule } from '@angular/core';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './layout/pie-chart/pie-chart.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
// import { TokenInterceptorService } from './login/token-interceptor.service';


import { LoginComponent } from './login/login.component';
import { PaymentmanagementComponent } from './payment-management/paymentmanagement.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HoroscopeModule } from './horoscope/horoscope.module';
import { UserManagementModule } from './user-management/user-management.module';

import { HoroscopeRoutingModule } from './horoscope/horoscope-routing.module';
import { UserManagementRoutingModule } from './user-management/user-management-routing.module';

import { AuthService } from './Authorization/auth.service';
import { AuthGuard } from './Authorization/auth.guard';
import { AccountModule } from './account/account.module';
// import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidemenuComponent, 
    LoginComponent,
    BreadcrumbsComponent,
    PaymentmanagementComponent,
    SettingsComponent,
    DashboardComponent,
   
   
    // HoroscopeComponent,
    PieChartComponent, 
    // UserRolesComponent,
    // UsermanagementComponent,
  ],
  
  imports: [
    BrowserModule,
    HoroscopeModule,
    UserManagementModule,
    AppRoutingModule,
    HoroscopeRoutingModule,
    UserManagementRoutingModule,
    NgbModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatTabsModule, 
    HttpClientModule,
    MatDialogModule,   
    AccountModule,
   
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS,
    // useClass: TokenInterceptorService,
    // multi: true}
    
      // { provide: HTTP_INTERCEPTORS, multi: true }
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
