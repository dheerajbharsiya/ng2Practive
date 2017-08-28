import { HotListDeal } from './hotlist.modal';
import { Injectable } from '@angular/core';

@Injectable()
export class HotListService {


    private hotList: HotListDeal[] = [
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic01.jpg', '3000'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic02.jpg', '3001'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic03.jpg', '3004'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic04.jpg', '2000'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic05.jpg', '5000'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic06.jpg', '6000'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic07.jpg', '8000'),
        new HotListDeal('dheeraj', 'hello', '1', 'images/pic08.jpg', '8000')

    ];

    getHotDeals(): HotListDeal[] {
        return this.hotList;
    }

}