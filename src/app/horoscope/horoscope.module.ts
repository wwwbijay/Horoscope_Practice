import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from '../Dialogs/update-daily/create-daily/create.component';
import { CreateWeeklyComponent } from '../Dialogs/update-weekly/create-weekly/create-weekly.component';
import { CreateManageComponent } from '../Dialogs/create-manage/create-manage.component';
import { CreateMonthlyComponent } from '../Dialogs/update-monthly/create-monthly/create-monthly.component';
import { CreateYearlyComponent } from '../Dialogs/update-yearly/create-yearly/create-yearly.component';
import { DeleteDailyComponent } from '../Dialogs/update-daily/delete-daily/delete-daily.component';
import { PreviewDailyComponent } from '../Dialogs/update-daily/preview-daily/preview-daily.component';
import { EditDailyComponent } from '../Dialogs/update-daily/edit-daily/edit-daily.component';

import { UpdateDailyComponent } from './update-daily/update-daily.component';
import { UpdateMonthlyComponent } from './update-monthly/update-monthly.component';
import { UpdateWeeklyComponent } from './update-weekly/update-weekly.component';
import { UpdateYearlyComponent } from './update-yearly/update-yearly.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateComponent,
    CreateWeeklyComponent,
    CreateManageComponent,
    CreateMonthlyComponent,
    CreateYearlyComponent,
    DeleteDailyComponent,
    PreviewDailyComponent,
    EditDailyComponent,

    UpdateDailyComponent,
    UpdateMonthlyComponent,
    UpdateWeeklyComponent,
    UpdateYearlyComponent,
  ]
})
export class HoroscopeModule { }
