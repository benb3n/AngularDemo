import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from './home/home.component';
import { EventModule } from './event/event.module';
import { ReportModule } from './report/report.module';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './login/register/register.component';
import { AccessesComponent } from './organization/accesses/accesses.component';
import { GroupComponent } from './organization/group/group.component';


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
    LoginComponent,
    RegisterComponent,
    AccessesComponent,
    GroupComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...featureModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
