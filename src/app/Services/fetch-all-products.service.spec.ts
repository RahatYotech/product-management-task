import { TestBed } from '@angular/core/testing';

import { FetchAllProductsService } from './fetch-all-products.service';

describe('FetchAllProductsService', () => {
  let service: FetchAllProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAllProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
