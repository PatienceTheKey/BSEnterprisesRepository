import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSparePartComponent } from './billing-spare-part.component';

describe('BillingSparePartComponent', () => {
  let component: BillingSparePartComponent;
  let fixture: ComponentFixture<BillingSparePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSparePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSparePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
