import { cribs } from './data/cribts';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  cribs: Array<any> = cribs;
  title = 'app works!';

  ngOnInit() {

  }

}
