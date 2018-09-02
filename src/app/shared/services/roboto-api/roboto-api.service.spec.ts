import { TestBed, inject } from '@angular/core/testing';

import { RobotoApiService } from './roboto-api.service';

describe('RobotoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotoApiService]
    });
  });

  it('should be created', inject([RobotoApiService], (service: RobotoApiService) => {
    expect(service).toBeTruthy();
  }));
});
