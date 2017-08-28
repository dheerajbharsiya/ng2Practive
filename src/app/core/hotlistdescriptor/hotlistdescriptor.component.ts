import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotlistdescriptor',
  templateUrl: './hotlistdescriptor.component.html',
  styleUrls: ['./hotlistdescriptor.component.scss']
})

export class HotlistdescriptorComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
