/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EngineerService } from './engineer.service';

describe('Service: Engineer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineerService]
    });
  });

  it('should ...', inject([EngineerService], (service: EngineerService) => {
    expect(service).toBeTruthy();
  }));
});
