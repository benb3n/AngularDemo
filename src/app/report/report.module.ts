import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReportAdminComponent } from './report-admin/report-admin.component';
import { ReportEventParticipantComponent} from './report-eventparticipant/report-eventparticipant.component';
import { ReportOrgEventComponent} from './report-orgevent/report-orgevent.component';
import { ReportFeedbackComponent} from './report-feedback/report-feedback.component';
import { AgGridModule }  from 'ag-grid-angular/main';
import { ReportService } from './report.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [ReportAdminComponent, 
    ReportUserComponent,
    ReportEventParticipantComponent,
    ReportOrgEventComponent,
    ReportFeedbackComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule
  ],
  providers: [ReportService]
})
export class ReportModule { }
