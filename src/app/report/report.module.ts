import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReportAdminComponent } from './report-admin/report-admin.component';

@NgModule({
  declarations: [ReportAdminComponent, ReportUserComponent],
  imports: [
    CommonModule
  ]
})
export class ReportModule { }
