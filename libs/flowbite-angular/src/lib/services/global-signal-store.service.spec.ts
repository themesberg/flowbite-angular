import { TestBed } from '@angular/core/testing';

import { GlobalSignalStoreService } from './global-signal-store.service';

describe('GlobalSignalStoreService', () => {
  let service: GlobalSignalStoreService<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSignalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
