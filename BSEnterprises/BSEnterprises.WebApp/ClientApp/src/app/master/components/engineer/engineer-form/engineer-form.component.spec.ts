import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerFormComponent } from './engineer-form.component';

describe('EngineerFormComponent', () => {
  let component: EngineerFormComponent;
  let fixture: ComponentFixture<EngineerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
