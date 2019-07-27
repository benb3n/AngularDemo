import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from './home/home.component';
import { EventModule } from './event/event.module';
import { ReportAdminComponent } from './report/report-admin/report-admin.component';
import { ReportModule } from './report/report.module';

// Add New Features into this Module
const featureModules = [
  EventModule,
  ReportModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...featureModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
