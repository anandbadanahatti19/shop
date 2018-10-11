import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersAndDealsComponent } from './offers-and-deals.component';

describe('OffersAndDealsComponent', () => {
  let component: OffersAndDealsComponent;
  let fixture: ComponentFixture<OffersAndDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersAndDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersAndDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
