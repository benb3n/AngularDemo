import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { ReportUserComponent } from './report/report-user/report-user.component';
import { ReportAdminComponent } from './report/report-admin/report-admin.component';
import { ReportEventParticipantComponent } from './report/report-eventparticipant/report-eventparticipant.component';
import { ReportOrgEventComponent } from './report/report-orgevent/report-orgevent.component';
import { ReportFeedbackComponent } from './report/report-feedback/report-feedback.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { MyEventComponent } from './profile/my-event/my-event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { GroupComponent } from './organization/group/group.component';
import { AccessesComponent } from './organization/accesses/accesses.component';

const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {

    path: 'home',
    component: HomeComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'event/admin',
    component: EventAdminComponent
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
    path: 'profile/edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'profile/my-event',
    component: MyEventComponent
  },
  {
    path: 'organization/group',
    component: GroupComponent
  },
  {
    path: 'organization/accesses',
    component: AccessesComponent
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
