import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventRegistration } from './eventRegistration.entity';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'

})
export class EventService {

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<any> {
    return this.http.get(environment.endpoints.getEvents);
  }

  public getEventsBySearchText(searchText): Observable<any> {
      // const param = new HttpParams()
      //           .set('searchText', searchText);
    return this.http.get<Event[]>(environment.endpoints.getEventsBySearch+ "/" + searchText);
  }
  

  public getEventRegistrations(userId): Observable<any> {
    console.log(userId);
    // const param = new HttpParams()
    // .set('userId', userId);
      return this.http.get(environment.endpoints.getEventRegistrations + "/" + userId);
  }

  public registerEvent(userId, eventId) {
    console.log(environment.endpoints.registerEvent + "/" + userId + ":" + eventId)
    return this.http.post(environment.endpoints.registerEvent + "/" + userId + ":" + eventId, null)
  }

  public withdrawEvent(userId, eventId){
    console.log(environment.endpoints.withdrawEvent + "/" + userId + ":" + eventId)
    return this.http.post(environment.endpoints.withdrawEvent + "/" + userId + ":" + eventId, null)
  }

}
