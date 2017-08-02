import { cribs } from './../data/cribts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cribs-list',
  templateUrl: './cribs-list.component.html',
  styleUrls: ['./cribs-list.component.css']
})
export class CribsListComponent implements OnInit {

  cribs:Array<any> = cribs;
  constructor() { }

  ngOnInit() {
  }

}
