import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DashboardHomeComponent } from './Routing/dashboard-home/dashboard-home.component';
import { HoroscopeHomeComponent } from './Routing/horoscope-home/horoscope-home.component';
import { UserManagementHomeComponent } from './Routing/user-management-home/user-management-home.component';
import { PaymentMgmtHomeComponent } from './Routing/payment-mgmt-home/payment-mgmt-home.component';
import { SettingsHomeComponent } from './Routing/settings-home/settings-home.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidemenuComponent,
    DashboardHomeComponent,
    HoroscopeHomeComponent,
    UserManagementHomeComponent,
    PaymentMgmtHomeComponent,
    SettingsHomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
