import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartWiseReportingComponent } from './spare-part-wise-reporting.component';

describe('SparePartWiseReportingComponent', () => {
  let component: SparePartWiseReportingComponent;
  let fixture: ComponentFixture<SparePartWiseReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparePartWiseReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparePartWiseReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
