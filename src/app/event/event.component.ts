import { Component, OnInit } from '@angular/core';
import { events } from './events';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any[];

  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.events = events;
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

}
