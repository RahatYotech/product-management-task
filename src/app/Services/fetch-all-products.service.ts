import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root'
})

export class FetchAllProductsService {

  constructor(private http: HttpClient) { }

  getProducts(category: string) {
    if (category) {
      return this.http.get(BASE_URL+`/category/${category}`)
    }
    else {
      return this.http.get(BASE_URL);
    }
  }

}