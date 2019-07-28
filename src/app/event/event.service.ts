import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class EventService {

  sampleData = { EventID: 1, UserID: 1 };
  // communicatorServiceUrl = 'http://demotest-env.cfqxtpafbz.ap-southeast-1.elasticbeanstalk.com/events/reminders/signupEvent';
  // communicatorServiceUrl = 'http://192.168.8.197:5000/events/reminders/signupEvent';
  eventServiceUrl = 'http://192.168.8.197:5000/events/reminders/signupEvent?EventID=1&UserID=1';
  constructor(private http: HttpClient) {}

  public getAllEvents(startDate, endDate): Observable<any> {
    const param = new HttpParams()
    .set('startDate', startDate)
    .set('endDate', endDate);
    return this.http.get(this.eventServiceUrl, null);
  }
  public registerEvent(userId, eventId): Observable<any> {
    const param = new HttpParams()
    .set('userId', userId)
    .set('eventId', eventId);
    return this.http.post(this.eventServiceUrl, null);
  }
  public withdrawEvent(userId, eventId): Observable<any> {
    const param = new HttpParams()
    .set('userId', userId)
    .set('eventId', eventId);
    return this.http.post(this.eventServiceUrl, null);
  }
  public searchAllEvent(searchText): Observable<any> {
    const param = new HttpParams()
    .set('searchText', searchText);
    return this.http.post(this.eventServiceUrl, null);
  }
}
