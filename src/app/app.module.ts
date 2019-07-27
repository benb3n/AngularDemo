import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from './home/home.component';
import { EventModule } from './event/event.module';
import { ReportModule } from './report/report.module';

import { AgGridModule }  from 'ag-grid-angular/main';
import { HttpClientModule } from '@angular/common/http'; 

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
  ReportModule,
    BrowserModule,
    AppRoutingModule,
    ...featureModules,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    AgGridModule
  ]
})
export class AppModule { }
