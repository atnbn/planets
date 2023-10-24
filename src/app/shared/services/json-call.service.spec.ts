import { TestBed } from '@angular/core/testing';

import { JsonCallService } from './json-call.service';

describe('JsonCallService', () => {
  let service: JsonCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
