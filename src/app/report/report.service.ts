import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AdminReport } from 'src/models/adminReport';
import { environment } from 'src/environments/environment';
import { UserReport } from 'src/models/userReport';
import {EventParticipantReport } from 'src/models/eventParticipantReport';
import {OrgEventReport} from 'src/models/orgevent';
import { EventFeedback } from 'src/models/eventFeedback';

@Injectable({
    providedIn : 'root'
})

export class ReportService {

    constructor (private httpClient: HttpClient) {}
    getAllAdminEvents (startDate: string, endDate: string){
        const param = new HttpParams()
                .set('startDate', startDate)
                .set('endDate', endDate);
        return this.httpClient.get<AdminReport[]>(environment.endpoints.getAllEvents,{params:param});
    }
    getUserEvents(userID: string, startDate: string, endDate: string){
        const param = new HttpParams()
                        .set('userId',userID)
                        .set('startDate', startDate)
                        .set('endDate', endDate);
        return this.httpClient.get<UserReport[]>(environment.endpoints.getUserEvent, {params: param});
    }
    getEventParticipant(eventId: string){
        const param = new HttpParams()
                        .set('eventId',eventId);
        return this.httpClient.get<EventParticipantReport[]>(environment.endpoints.getEventParticipant, {params: param});
    }
    getOrgEvent(orgId: string){
        const param = new HttpParams()
                        .set('organisationId', orgId);
        return this.httpClient.get<OrgEventReport[]>(environment.endpoints.getOrgEvent, {params: param});
    }

    getEventFeedback(eventId: string){
        const param = new HttpParams()
                        .set('eventId', eventId);
        return this.httpClient.get<EventFeedback[]>(environment.endpoints.getEventFeedback, {params: param});
    } 

}