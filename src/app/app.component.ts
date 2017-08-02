import { cribs } from './data/cribts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  cribs: Array<any> = cribs;
  title = 'app works!';

  ngOnInit() {

  }

}
