import { TestBed } from '@angular/core/testing';

import { FetchSearchedProductsService } from './fetch-searched-products.service';

describe('FetchSearchedProductsService', () => {
  let service: FetchSearchedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSearchedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
