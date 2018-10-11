import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSparePartListComponent } from './billing-spare-part-list.component';

describe('BillingSparePartListComponent', () => {
  let component: BillingSparePartListComponent;
  let fixture: ComponentFixture<BillingSparePartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSparePartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSparePartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
