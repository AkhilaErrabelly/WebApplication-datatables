import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  //selector: 'app-login',
  templateUrl: '/app/auth/login.component.html',
  styleUrls: ['/app/auth/login.component.css']
})
export class LoginComponent implements OnInit {
  localUser = {
    username: '',
    password: ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let checknow = this.auth.authenticatenow(this.localUser);
    
    checknow.then((res) => {
      console.log("response from authenticatenow call : " + JSON.stringify(res));
      if (res) {
        this.router.navigate(['/dashboard']);
      }
      else {
        console.log('Invalid user');
        this.router.navigate(['/login']);
      }

    }).catch((reason)=>{
      console.log("Error from authenticatenow call : " + JSON.stringify(reason));
      this.router.navigate(['/dashboard']); // delete this and add invalid error message.
    })
  }
}
