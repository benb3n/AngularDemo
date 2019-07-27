import { Injectable } from '@angular/core';
import { User } from './user.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  loginUrl = '';
  currentUser: User;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get(this.loginUrl);
  }

  logout() {
    this.currentUser = null;
  }

  isLogin(): boolean {
    return this.currentUser === undefined || this.currentUser === null ? false : true;
  }

  getUserType(): string {
    return this.isLogin() ? this.currentUser.accountType : null;
  }
}
