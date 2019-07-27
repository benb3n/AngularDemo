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

import { EventAdminComponent } from './event-admin/event-admin.component';
import { ReactiveFormsModule } from "@angular/forms";
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
        EventAdminComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgbModule,
        ...featureModules
    ],
    providers: [],
    bootstrap: [AppComponent]
    })

export class AppModule { }

