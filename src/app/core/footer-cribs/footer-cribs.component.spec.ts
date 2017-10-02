import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCribsComponent } from './footer-cribs.component';

describe('FooterCribsComponent', () => {
  let component: FooterCribsComponent;
  let fixture: ComponentFixture<FooterCribsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCribsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
