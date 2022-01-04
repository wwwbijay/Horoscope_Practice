import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ManageComponent } from './horoscope/manage/manage.component';
import { UpdateDailyComponent } from './horoscope/update-daily/update-daily.component';
import { UpdateMonthlyComponent } from './horoscope/update-monthly/update-monthly.component';
import { UpdateWeeklyComponent } from './horoscope/update-weekly/update-weekly.component';
import { UpdateYearlyComponent } from './horoscope/update-yearly/update-yearly.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { UsermanagementComponent } from './user-management/usermanagement/usermanagement.component';
import { PaymentmanagementComponent } from './payment-management/paymentmanagement/paymentmanagement.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './layout/pie-chart/pie-chart.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
// import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidemenuComponent,
    ManageComponent,
    UpdateDailyComponent,
    UpdateMonthlyComponent,
    UpdateYearlyComponent,
    LoginComponent,
    ControlPanelComponent,
    ManageComponent,
    UpdateDailyComponent,
    UpdateMonthlyComponent,
    UpdateWeeklyComponent,
    UpdateYearlyComponent,
    BreadcrumbsComponent,
    UsermanagementComponent,
    PaymentmanagementComponent,
    SettingsComponent,
    DashboardComponent,
    HoroscopeComponent,
    PieChartComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatTabsModule, 
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
