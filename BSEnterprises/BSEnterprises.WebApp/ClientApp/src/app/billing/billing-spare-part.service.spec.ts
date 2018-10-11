import { TestBed, inject } from '@angular/core/testing';

import { BillingSparePartService } from './billing-spare-part.service';

describe('BillingSparePartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingSparePartService]
    });
  });

  it('should be created', inject([BillingSparePartService], (service: BillingSparePartService) => {
    expect(service).toBeTruthy();
  }));
});
