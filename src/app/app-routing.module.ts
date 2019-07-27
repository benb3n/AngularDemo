import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ReportUserComponent } from './report/report-user/report-user.component';
import { ReportAdminComponent } from './report/report-admin/report-admin.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { MyEventComponent } from './profile/my-event/my-event.component';

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
    path: 'profile/edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'profile/my-event',
    component: MyEventComponent
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
