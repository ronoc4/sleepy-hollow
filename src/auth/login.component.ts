import {Component, ViewChild} from "@angular/core";
import {User} from "./user";
import {Router} from '@angular/router';
import {ConfigService} from "../data/config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  @ViewChild('loginForm') loginForm;
  username: string;
  password: number;
  error: string;

  constructor(private router: Router, private config: ConfigService) {}

  userLogin(){
    let user = {name: this.username, pass: this.password};
    console.log(user);
    if(this.loginForm.valid) {
      console.log('Form Submitted');
    }

    this.config.userLogIn(user).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/blogs');
        },
      err => {
        this.error = err;
        console.log('An error occurred' + JSON.stringify(err));
      }

    )
  }
}
