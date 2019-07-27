import { Component, NgModule, Injectable, OnInit } from '@angular/core';
import { events } from './events';
import { CommunicatorService } from '../communicator.service';
import { EventService } from './event.service';
import { users } from './users';
import { eventRegistrations } from './eventRegistrations'
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
    this.events = events;
    this.users = users;
    this.eventRegistrations = eventRegistrations;
    this.currentUserId = this.loginService.currentUser.emailAddress;

    console.log(this.events);

  }

  register(currentUserId) {
    // window.alert('The register function is not implemented yet');
    this.eventService.registerEvent().subscribe(
      (result) => {
        window.alert(result);
      },
      (err) => console.error(err)
    );
    this.communicatorService.subscribeEvent().subscribe(
      (result) => {
        window.alert(result);
      },
      (err) => console.error(err)
    );
  }
  withdraw(currentUserId) {
    // window.alert('The register function is not implemented yet');
    this.eventService.withdrawEvent().subscribe(
      (result) => {
        window.alert(result);
      },
      (err) => console.error(err)
    );
  }

  searchAllEvents(searchText){
    this.eventService.searchAllEvent(searchText).subscribe(
      (result) => {
        window.alert(result);
      },
      (err) => console.error(err)
    );
  }

  isRegistered(eventId, userId){
    let result: boolean = false;

    eventRegistrations.forEach(function (eR) {
      if(eR.user_id == userId && eR.event_id == eventId) {
        if (eR.status == "registered"){
          result = true;
        }
      }
    });
    return result;
  }
}
