import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // @Input() outsideData;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('')
  })

  doLogin = function() {
  }
}
