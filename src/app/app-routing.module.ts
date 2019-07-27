import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ReportUserComponent } from './report/report-user/report-user.component';
import { ReportAdminComponent } from './report/report-admin/report-admin.component';
import { ReportEventParticipantComponent } from './report/report-eventparticipant/report-eventparticipant.component';
import { ReportOrgEventComponent } from './report/report-orgevent/report-orgevent.component';
import { ReportFeedbackComponent } from './report/report-feedback/report-feedback.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'report/user',
    component: ReportUserComponent
  },
  {
    path: 'report/admin',
    component: ReportAdminComponent
  },
  {
    path: 'report/eventparticipant',
    component: ReportEventParticipantComponent
  },
  {
    path: 'report/orgevent',
    component: ReportOrgEventComponent
  },
  {
    path: 'report/eventFeedback',
    component: ReportFeedbackComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
