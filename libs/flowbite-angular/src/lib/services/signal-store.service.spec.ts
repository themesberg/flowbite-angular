import { SignalStoreService } from './signal-store.service';

import { TestBed } from '@angular/core/testing';

describe('SignalStoreService', () => {
  let service: SignalStoreService<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SignalStoreService] });
    service = TestBed.inject(SignalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
