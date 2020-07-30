import { TestBed } from '@angular/core/testing';

import { ObspracticeService } from './obspractice.service';

describe('ObspracticeService', () => {
  let service: ObspracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObspracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
