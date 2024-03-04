import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://dummyjson.com/products/search?q=';

@Injectable({
  providedIn: 'root'
})
export class FetchSearchedProductsService {

  constructor(private http: HttpClient) { }

  getProducts(queryText: string) {
    return this.http.get(BASE_URL + queryText);
  }
}