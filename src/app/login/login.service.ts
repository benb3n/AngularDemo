import { Injectable } from '@angular/core';
import { User } from './user.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  loginUrl = 'http://192.168.8.190:5000';
  currentUser: User;
  constructor(private http: HttpClient, private router: Router) { }

  login(eMail: string, pwd: string): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.loginUrl + '/accounts/login', { email: eMail, password: pwd }, httpHeader);
  }

  logout() {
    this.currentUser = null;
    this.router.navigateByUrl('/home');
  }

  isLogin(): boolean {
    return this.currentUser === undefined || this.currentUser === null ? false : true;
  }

  isAdmin(): boolean {
    if (this.isLogin()) {
      const accesses = this.currentUser.access;
      for (const access of accesses) {
        if (access.access === 'ADMIN' || access.access === 'SUPER_ADMIN') {
          return true;
        }
      }
    }
    return false;
  }
}
