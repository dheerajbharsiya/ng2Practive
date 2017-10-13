import { ServerService } from './../core/server.service';
import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  private instantDeal: {};
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getData().subscribe((response: Response) => {
      const json = response.json();
      let result = [];
      for(let obj in json){
        if(json.hasOwnProperty(obj)) {
          result.push(json[obj]);
        }
      }
      this.instantDeal = result[0]; 
      console.log(json);
    }, () => { });
  }

}
