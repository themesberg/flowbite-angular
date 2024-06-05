import { TestBed } from '@angular/core/testing';

import { SignalStoreService } from './signal-store.service';

describe('SignalStoreService', () => {
  let service: SignalStoreService<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
