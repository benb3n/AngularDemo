import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent {
    constructor(private fb: FormBuilder) { }

    eventForm = this.fb.group({
        eventDetails: this.fb.group({
            eventName: [''],
            eventDate: [''],
            eventCategory: [''],
            eventMaxPax: [''],
            eventDescription: ['']
        })
    });


    onSubmit(form: FormGroup) {
        console.log('Valid?', form.valid);
        console.log('Event Name', form.value.eventDetails.eventName);
        console.log('Event Date', form.value.eventDetails.eventDate);
        console.log('Event Category', form.value.eventDetails.eventCategory);
    }

}
