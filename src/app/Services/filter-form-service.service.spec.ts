import { TestBed } from '@angular/core/testing';

import { FilterFormServiceService } from './filter-form-service.service';

describe('FilterFormServiceService', () => {
  let service: FilterFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
