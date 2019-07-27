import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AdminReport } from 'src/models/adminReport';
import { environment } from 'src/environments/environment';
import { UserReport } from 'src/models/userReport';

@Injectable({
    providedIn : 'root'
})

export class ReportService {

    constructor (private httpClient: HttpClient) {}
    getAllAdminEvents (){
        return this.httpClient.get<AdminReport[]>(environment.endpoints.getAllEvents);
    }
    getUserEvents(userID: string){
        const param = new HttpParams()
                        .set('userId',userID);
        return this.httpClient.get<UserReport[]>(environment.endpoints.getUserEvent, {params: param});
    }

}