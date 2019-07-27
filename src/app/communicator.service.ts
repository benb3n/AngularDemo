import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  sampleData = { EventID: 1, UserID: 1 };
  // communicatorServiceUrl = 'http://demotest-env.cfqxtpafbz.ap-southeast-1.elasticbeanstalk.com/events/reminders/signupEvent';
  // communicatorServiceUrl = 'http://192.168.8.197:5000/events/reminders/signupEvent';
  communicatorServiceUrl = 'http://192.168.8.197:5000/events/reminders/signupEvent?EventID=1&UserID=1';
  constructor(private http: HttpClient) {}

  public subscribeEvent(): Observable<any> {
    return this.http.post(this.communicatorServiceUrl, null);
  }
}
