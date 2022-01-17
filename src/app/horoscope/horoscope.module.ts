import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoroscopeRoutingModule } from './horoscope-routing.module'; 

import { UpdateDailyComponent } from './update-daily/update-daily.component'; 
import { UpdateMonthlyComponent } from './update-monthly/update-monthly.component';
import { UpdateWeeklyComponent } from './update-weekly/update-weekly.component';
import { UpdateYearlyComponent } from './update-yearly/update-yearly.component';
import { CreateComponent } from './Dialogs/update-daily/create-daily/create.component';
import { CreateWeeklyComponent } from './Dialogs/update-weekly/create-weekly/create-weekly.component';
import { CreateManageComponent } from './Dialogs/create-manage/create-manage.component';
import { CreateMonthlyComponent } from './Dialogs/update-monthly/create-monthly/create-monthly.component';
import { DeleteDailyComponent } from './Dialogs/update-daily/delete-daily/delete-daily.component';
import { PreviewDailyComponent } from './Dialogs/update-daily/preview-daily/preview-daily.component';
import { EditDailyComponent } from './Dialogs/update-daily/edit-daily/edit-daily.component';
import { CreateYearlyComponent } from './Dialogs/update-yearly/create-yearly/create-yearly.component';
import { HoroscopeComponent } from './horoscope.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateManageComponent,
    CreateWeeklyComponent,
    CreateMonthlyComponent,
    CreateYearlyComponent,
    DeleteDailyComponent,
    PreviewDailyComponent,
    EditDailyComponent,
    CreateComponent,
    HoroscopeComponent,
    UpdateDailyComponent,
    UpdateMonthlyComponent,
    UpdateWeeklyComponent,
    UpdateYearlyComponent,

  ],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    FormsModule,
   
  ]
})
export class HoroscopeModule { }
