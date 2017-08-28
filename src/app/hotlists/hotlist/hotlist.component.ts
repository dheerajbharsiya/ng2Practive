import { HotListService } from './hotlist.service';
import { cribs } from './../../data/cribts';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.scss']
})
export class HotlistComponent implements OnInit {

  deals:Array<any> = [];

  constructor(private hotListService: HotListService) {
  }

  ngOnInit() {
    this.deals = this.hotListService.getHotDeals();
  }

}
