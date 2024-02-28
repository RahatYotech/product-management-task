import { Component, OnInit, inject } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FetchAllProductsService } from '../Services/fetch-all-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PaginationComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  private fetchAllProductsService = inject(FetchAllProductsService);
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadAllProducts();
  }
  

  loadAllProducts() {
    this.fetchAllProductsService.getProducts()
    .subscribe((data: any) => {
      console.log(data.products);
      this.products = data.products;
    })
  }

}
