import { HotlistdescriptorComponent } from './../core/hotlistdescriptor/hotlistdescriptor.component';
import { HotListDeal } from './../hotlists/hotlist/hotlist.modal';
import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cribs-list',
  templateUrl: './cribs-list.component.html',
  styleUrls: ['./cribs-list.component.scss']
})
export class CribsListComponent implements OnInit {

  @ViewChild('myModal') myModal: ElementRef;
  @Input() instantDeal: HotListDeal;
  @Output() dealSelected = new EventEmitter<String>();
  constructor(private modalService: NgbModal) { }



  open() {
    const modalRef = this.modalService.open(HotlistdescriptorComponent);
    modalRef.componentInstance.instantDeal = this.instantDeal;
  }


  ngOnInit() {
  }

  public onDealSelected(deal: HotListDeal): void {
    this.dealSelected.emit('deal1');
  }

}
