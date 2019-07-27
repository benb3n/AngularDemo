import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor() {
  }

  public logout() {
      console.log('To logout..');
  }

}
