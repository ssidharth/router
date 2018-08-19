import { TestBed, inject } from '@angular/core/testing';

import { ParentserviceService } from './parentservice.service';

describe('ParentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentserviceService]
    });
  });

  it('should be created', inject([ParentserviceService], (service: ParentserviceService) => {
    expect(service).toBeTruthy();
  }));
});
