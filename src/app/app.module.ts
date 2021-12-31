import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { DashboardHomeComponent } from './horoscope/dashboard-home/dashboard-home.component';
import { HoroscopeHomeComponent } from './horoscope/horoscope-home/horoscope-home.component';
import { UserManagementHomeComponent } from './horoscope/user-management-home/user-management-home.component';
import { PaymentMgmtHomeComponent } from './horoscope/payment-mgmt-home/payment-mgmt-home.component';
import { SettingsHomeComponent } from './horoscope/settings-home/settings-home.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


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
    ControlPanelComponent,
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
