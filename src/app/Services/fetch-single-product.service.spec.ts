import { TestBed } from '@angular/core/testing';

import { FetchSingleProductService } from './fetch-single-product.service';

describe('FetchSingleProductService', () => {
  let service: FetchSingleProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSingleProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
