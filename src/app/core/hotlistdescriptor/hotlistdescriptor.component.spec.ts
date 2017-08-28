import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistdescriptorComponent } from './hotlistdescriptor.component';

describe('HotlistdescriptorComponent', () => {
  let component: HotlistdescriptorComponent;
  let fixture: ComponentFixture<HotlistdescriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotlistdescriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlistdescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
