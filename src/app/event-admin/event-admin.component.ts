import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { events } from './admin-events';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements  OnInit {
    constructor(private fb: FormBuilder) { }
    getEvents =  false;
    editEvents = false;
    addFlag = false
    events: any[];
    editEventDetails: any[];

    eventForm = this.fb.group({
        eventDetails: this.fb.group({
            eventName: [''],
            eventDate: [''],
            eventCategory: [''],
            eventMaxPax: [''],
            eventDescription: ['']
        })
    });
    ngOnInit() {
      this.getEvents = true;
      this.editEvents = false;
      this.addFlag = false;
      this.events = events;
      this.editEventDetails = [];
    }

    getEvent() {
        if (!this.editEvents && this.getEvents) {
            return true;
        } else {
            return false;
        }
    }

    onSubmit(form: FormGroup) {
        if (form.status === 'VALID') {
            this.getEvents = true;
        } else {
            this.getEvents = false;
        }
    }

    addingEvent() {
        this.getEvents = false;
    }

    addEvent() {
        if (!this.editEvents && !this.getEvents) {
            return true;
        } else {
            return false;
        }
    }

    editingEvent(event) {
        this.editEvents = true;
    }

    editEvent() {
        if (this.editEvents && this.getEvents) {
            return true;
        } else {
            return false;
        }
    }

}
