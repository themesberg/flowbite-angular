import { DDREService } from './public_api';

import { TestBed } from '@angular/core/testing';

describe('DDREService', () => {
  let service: DDREService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DDREService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
