import { Injectable } from '@angular/core';
import { User } from './user.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  loginUrl = '';
  currentUser: User;
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get(this.loginUrl);
  }

  logout() {
    this.currentUser = null;
    this.router.navigateByUrl('/home');
  }

  isLogin(): boolean {
    return this.currentUser === undefined || this.currentUser === null ? false : true;
  }

  getUserType(): string {
    return this.isLogin() ? this.currentUser.accountType : null;
  }
}
