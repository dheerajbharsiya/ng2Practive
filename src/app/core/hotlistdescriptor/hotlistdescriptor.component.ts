import { ServerService } from './../server.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotlistdescriptor',
  templateUrl: './hotlistdescriptor.component.html',
  styleUrls: ['./hotlistdescriptor.component.scss']
})
@Injectable()
export class HotlistdescriptorComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private serverService: ServerService) { }

  ngOnInit() {
  }

  sealDeal(instantDeal): void {
    let result = this.serverService.postData(instantDeal)
      .subscribe((response) => {
        if (response) {
          console.log("successfully saved");
        }
      },
      (error) => {
        console.log("error while saving");
      }
      );
  }

}
