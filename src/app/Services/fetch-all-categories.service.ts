import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://dummyjson.com/products/categories';

@Injectable({
  providedIn: 'root'
})
export class FetchAllCategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(BASE_URL);
  }
}