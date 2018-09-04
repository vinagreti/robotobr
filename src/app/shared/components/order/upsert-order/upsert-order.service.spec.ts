import { TestBed, inject } from '@angular/core/testing';

import { UpsertOrderService } from './upsert-order.service';

describe('UpsertOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpsertOrderService]
    });
  });

  it('should be created', inject([UpsertOrderService], (service: UpsertOrderService) => {
    expect(service).toBeTruthy();
  }));
});
