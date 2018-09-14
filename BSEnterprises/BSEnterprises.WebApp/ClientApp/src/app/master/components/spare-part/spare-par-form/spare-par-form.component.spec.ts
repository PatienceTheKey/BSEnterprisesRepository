import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareParFormComponent } from './spare-par-form.component';

describe('SpareParFormComponent', () => {
  let component: SpareParFormComponent;
  let fixture: ComponentFixture<SpareParFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpareParFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareParFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
