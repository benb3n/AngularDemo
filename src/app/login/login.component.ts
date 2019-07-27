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
    console.log(f);
    this.loginService.currentUser = new User('admin', '1', '1', '1');
    this.router.navigateByUrl('/home');
    // this.loginService.login(email, password).subscribe(
    //   (result) => {
    //     console.log(result);
    //   },
    //   (err) => console.error(err)
    // );
  }

}
