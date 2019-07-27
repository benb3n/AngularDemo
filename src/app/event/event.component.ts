import { Component, OnInit } from '@angular/core';
import { events } from './events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any[];
  constructor() { }

  ngOnInit() {
    this.events = events;
    console.log(this.events);

  }

  register(){
    window.alert('The register function is not implemented yet');
  }
  withdraw(){
    window.alert('We are going to withdraw you from the event')
  }

}
