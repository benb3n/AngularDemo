import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public loginService: LoginService) {
  }

  public logout() {
    console.log(this.loginService.currentUser);
    this.loginService.logout();
  }

}
