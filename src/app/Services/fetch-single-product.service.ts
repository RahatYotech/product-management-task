import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

// const BASE_URL = `https://dummyjson.com/products/${id}`

@Injectable({
  providedIn: 'root'
})
export class FetchSingleProductService {

  private http = inject(HttpClient);

  constructor() { }

  getSingleProduct(ID: any) {
    return this.http.get(`https://dummyjson.com/products/${ID}`);
  }
}
