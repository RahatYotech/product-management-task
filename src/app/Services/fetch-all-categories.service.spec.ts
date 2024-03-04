import { TestBed } from '@angular/core/testing';

import { FetchAllCategoriesService } from './fetch-all-categories.service';

describe('FetchAllCategoriesService', () => {
  let service: FetchAllCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAllCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
