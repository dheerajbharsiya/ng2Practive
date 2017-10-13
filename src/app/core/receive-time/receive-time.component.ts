import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-receive-time',
  templateUrl: './receive-time.component.html',
  styleUrls: ['./receive-time.component.scss']
})
export class ReceiveTimeComponent implements OnInit {

  private data: Observable<Number>;
  private values: Array<Number> = [];

  constructor() { }

  ngOnInit() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(10);
      }, 1000);
      setTimeout(() => {
        observer.next(20);
      }, 2000);
    });

    this.data.subscribe(
      value => {
        this.values.push(value);
        console.log(this.values);
      },
      error => {

      }, () => { });
  }



}
