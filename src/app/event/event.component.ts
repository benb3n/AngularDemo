import { Component, NgModule, OnInit } from '@angular/core';
import { events } from './events';
import { CommunicatorService } from '../communicator.service';
import { users } from './users';
import { eventRegistrations } from './eventRegistrations';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  events: any[];
  users: any[];
  eventRegistrations: any[];
  currUserId = 'my77741';

  title = 'Angular Search Using ng2-search-filter';
  searchText;
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.events = events;
    this.users = users;
    this.eventRegistrations = eventRegistrations;

    console.log(this.events);

  }

  register() {
    // window.alert('The register function is not implemented yet');
    this.communicatorService.subscribeEvent().subscribe(
      (result) => {
        console.log(result);
      },
      (err) => console.error(err)
    );
  }

  withdraw() {

    window.alert('We are going to withdraw you from the event');
  }
  search(searchText) {
    window.alert('We are searching events related to ' + searchText);
  }
  isRegistered(eventId, userId) {
    let result = false;

    eventRegistrations.forEach(function (eR) {
      if(eR.user_id === userId && eR.event_id === eventId) {
        if (eR.status === 'registered') {
          result = true;
        }
      }
    });
    return result;
  }
}
