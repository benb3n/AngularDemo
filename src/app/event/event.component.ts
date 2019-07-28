import { Component, NgModule, Injectable, OnInit } from '@angular/core';
//import { events } from './events';
import { CommunicatorService } from '../communicator.service';
import { EventService } from './event.service';
//import { users } from './users';
//import { eventRegistrations } from './eventRegistrations'
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

@Injectable()
export class EventComponent implements OnInit {
  events: any[];
  users: any[];
  eventRegistrations: any[];
  currentUserId: string;

  title = 'Angular Search Using ng2-search-filter';
  searchText: string;
  constructor(private communicatorService: CommunicatorService, private eventService: EventService, private loginService: LoginService) { }

  ngOnInit() {
    this.currentUserId = this.loginService.currentUser.emailAddress;
    this.getEvents();
    this.getEventRegistrations();

    console.log(this.events);

  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      result => {
        console.log(result);
        this.events = result;
      },
      (err) => console.error(err)
    );
  }

  getEventRegistrations(){
    this.eventService.getEventRegistrations(this.currentUserId).subscribe(
      result => {
        console.log(result);
        this.eventRegistrations = result;
      },
      (err) => console.error(err)
    );
  }

  register(eventId) {
    // window.alert('The register function is not implemented yet');
    this.eventService.registerEvent(this.currentUserId, eventId).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => console.error(err)
    );
    this.communicatorService.subscribeEvent().subscribe(
      (result) => {
        console.log(result);
      },
      (err) => console.error(err)
    );
  }
  
  withdraw(eventId) {
    // window.alert('The register function is not implemented yet');
    this.eventService.withdrawEvent(this.currentUserId, eventId).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => console.error(err)
    );
  }

  searchAllEvents(searchText) {
    this.eventService.getEventsBySearchText(searchText).subscribe(
      (result) => {
        console.log(result);
        this.events = result;
      },
      (err) => console.error(err)
    );
  }

  isRegistered(eventId) { 
    let result: boolean = false;
    this.eventRegistrations.forEach(function (eR) {
      if (eR.event_id == eventId) {
          result = true;
      }
    });
    return result;
  }
}
