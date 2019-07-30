import { Component, OnInit } from '@angular/core';
import { User } from '../user.entity';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f);
    this.loginService.register(f.email,f.password, f.firstname, f.lastname, f.gender, f.birthday, f.nationality, f.interest, f.region)
    .subscribe(
      (result) => {
        console.log(result);
      }
    );
  }
}
