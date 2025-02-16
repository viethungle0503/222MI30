import { TestBed } from '@angular/core/testing';

import { GenderizeService } from './genderize.service';

describe('GenderizeService', () => {
  let service: GenderizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
