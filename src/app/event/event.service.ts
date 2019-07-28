import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'

})
export class EventService {
  sampleData = { EventID: 1, UserID: 1 };
  // communicatorServiceUrl = 'http://demotest-env.cfqxtpafbz.ap-southeast-1.elasticbeanstalk.com/events/reminders/signupEvent';
  // communicatorServiceUrl = 'http://192.168.8.197:5000/events/reminders/signupEvent';
  eventServiceUrl = 'http://192.168.8.197:5000/events/reminders/signupEvent?EventID=1&UserID=1';
  constructor(private http: HttpClient, private router: Router) {}

  getEvents (){
    return this.http.get(environment.endpoints.getEvents);
  }

  public searchAllEvent(searchText): Observable<any> {
    return this.http.post(this.eventServiceUrl, null);
  }

  public registerEvent(): Observable<any> {
    return this.http.post(this.eventServiceUrl, null);
  }
  public withdrawEvent(): Observable<any> {
    return this.http.post(this.eventServiceUrl, null);
  }
  
}
