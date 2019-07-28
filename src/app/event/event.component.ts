import { Component, Injectable, OnInit } from '@angular/core';
import { CommunicatorService } from '../communicator.service';
import { EventService } from './event.service';
import { eventRegistrations } from './eventRegistrations'
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

@Injectable()
export class EventComponent implements OnInit {
  events: any;
  users: any[];
  eventRegistrations: any[];
  currentUserId: string;

  dtOptions: any = {};

  title = 'Angular Search Using ng2-search-filter';
  searchText: string;
  constructor(private communicatorService: CommunicatorService, private eventService: EventService, private loginService: LoginService) { }

  ngOnInit() {
    this.getAllEvents();
    this.eventRegistrations = eventRegistrations;
    //this.currentUserId = this.loginService.currentUser.emailAddress;

    // console.log(this.events);
  }

  getAllEvents(){
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events;
        console.log(this.events);

      },
      (err) => console.error(err)
    )
  }

  getOneEvent(){
    this.eventService
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
