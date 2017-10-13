import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  // token: string = '';
  public isLoggedIn = false;

  constructor(private http: Http) { }

  signUpUser(email: string, password: string) {
    this.isLoggedIn = true;
  }

  signinUser(email, password): Observable<any> {
    this.isLoggedIn = true;
    return this.http.get('/api/hello').map(res => {
      return res.json();
    });
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  userLogout() {
    this.isLoggedIn = false;
  }
}