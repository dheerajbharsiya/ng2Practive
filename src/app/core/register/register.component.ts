import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  singUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.singUpForm = new FormGroup({
      'firstName': new FormControl('Dheeraj', [Validators.required, this.customValidator.bind(this)]),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email], this.asnyForbilddenValidator),
      'password': new FormControl(null, Validators.required)
    });
  }

  onFormSubmit = () => {
    console.log(this.singUpForm);
  }

  customValidator(control: FormControl): { [s: string]: boolean } {
    if (['dheeraj'].indexOf(control.value) !== -1) {
      return { 'userNameInvalid': true };
    }
    return null;
  }

  asnyForbilddenValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'd@gmail.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
