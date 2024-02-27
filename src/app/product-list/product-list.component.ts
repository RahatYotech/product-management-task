import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor() {}

  http = inject(HttpClient);
  products: any[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get('https://dummyjson.com/products')
    .subscribe((data: any) => {
      console.log(data.products);
      this.products = data.products;
    })
  }
}
