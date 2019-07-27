import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {

  myEventList: any[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    // this.profileService.getUserEvents().subscribe(
    //   (result) => {
    //     console.log(result);
    // });

    this.myEventList = [
      { eventName: 'Event Number #1', eventContent: 'Event Message for #1' },
      { eventName: 'Event Number #2', eventContent: 'Event Message for #2' },
      { eventName: 'Event Number #3', eventContent: 'Event Message for #3' },
    ];
  }

}
