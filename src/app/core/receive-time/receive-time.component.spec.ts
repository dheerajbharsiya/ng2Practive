import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTimeComponent } from './receive-time.component';

describe('ReceiveTimeComponent', () => {
  let component: ReceiveTimeComponent;
  let fixture: ComponentFixture<ReceiveTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
