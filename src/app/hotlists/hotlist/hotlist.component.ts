import { HotListDeal } from './hotlistModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.scss']
})
export class HotlistComponent implements OnInit {

  deals: HotListDeal[] = [];

  constructor() {

  }

  ngOnInit() {
    this.deals.push(new HotListDeal('dheerajOfer', 'newOffer', '1', '', 'Dheeraj'));
    this.deals.push(new HotListDeal('testOffer', 'testOffer', '2', '', 'Sureaj'));
    this.deals.push(new HotListDeal('testOffer1', 'testOffer', '2', '', 'Sureaj'));
    
  }

}
