import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-cribs',
  templateUrl: './footer-cribs.component.html',
  styleUrls: ['./footer-cribs.component.scss']
})
export class FooterCribsComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  genderValue = 'male';
  rating: Array<string> = ['good', 'bad','Average'];
  constructor() { }


  onSubmit(form : NgForm): void  {
    console.log(this.form);
  }

  onReset() {
    this.form.reset();
  }

  ngOnInit() {
  }

}
