import { TestBed, inject } from '@angular/core/testing';

import { Http2servicesService } from './http2services.service';

describe('Http2servicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http2servicesService]
    });
  });

  it('should be created', inject([Http2servicesService], (service: Http2servicesService) => {
    expect(service).toBeTruthy();
  }));
});
