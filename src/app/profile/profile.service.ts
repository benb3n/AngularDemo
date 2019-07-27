import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  profileUrl = '';

  constructor(private http: HttpClient) {}

  public getUserEvents() {
    return this.http.get(this.profileUrl);
  }
}
