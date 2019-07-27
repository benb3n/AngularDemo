import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule, BrowserModule, FormsModule, Ng2SearchPipeModule
  ]
})
export class EventModule { }
