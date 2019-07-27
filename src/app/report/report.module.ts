import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReportAdminComponent } from './report-admin/report-admin.component';
import { AgGridModule }  from 'ag-grid-angular/main';
import { ReportService } from './report.service';


@NgModule({
  declarations: [ReportAdminComponent, ReportUserComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  providers: [ReportService]
})
export class ReportModule { }
