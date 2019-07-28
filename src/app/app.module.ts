import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from './home/home.component';
import { EventModule } from './event/event.module';
import { ReportModule } from './report/report.module';
import { AgGridModule } from 'ag-grid-angular/main';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ProfileModule } from './profile/profile.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './login/register/register.component';
import { AccessesComponent } from './organization/accesses/accesses.component';
import { GroupComponent } from './organization/group/group.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Add New Features into this Module
const featureModules = [
  EventModule,
  ReportModule,
  ProfileModule,
  LoginModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DropdownDirective,
    EventAdminComponent,
    LoginComponent,
    RegisterComponent,
    EventAdminComponent,
    AccessesComponent,
    GroupComponent,
  ],
  imports: [
    ReportModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    ...featureModules,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    AgGridModule
  ]
})

export class AppModule { }
