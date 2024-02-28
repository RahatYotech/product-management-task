import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root'
})

export class FetchAllProductsService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get(BASE_URL);
  }

}