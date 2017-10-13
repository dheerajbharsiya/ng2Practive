import { AuthService } from './../auth.service';
import {Output, Component, OnInit, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  @Output() userNameAvailable = new EventEmitter<String>();

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password).subscribe( (data) => {
      console.log(data);
    });
    this.userNameAvailable.emit(form.value.email);
  }

}
