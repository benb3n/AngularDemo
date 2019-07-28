import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f) {
    const email = f.email;
    const password = f.password;
    this.loginService.login(email, password).subscribe(
      (result) => {
        this.loginService.currentUser = new User().deserialized(result);
        console.log(this.loginService.currentUser);
        this.router.navigateByUrl('/home');
      },
      (err) => console.error(err)
    );
  }

}
