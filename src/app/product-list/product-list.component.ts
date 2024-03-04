import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FetchAllProductsService } from '../Services/fetch-all-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FilterFormServiceService } from '../Services/filter-form-service.service';
import { SearchFormServiceService } from '../Services/search-form-service.service';
import { FetchSearchedProductsService } from '../Services/fetch-searched-products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PaginationComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  products: any[] = [];
  category: string = "";
  queryText: string = "";

  constructor(
    private fetchAllProductsService: FetchAllProductsService,
    private fetchSearchedProductsService: FetchSearchedProductsService,
    private filterFormService: FilterFormServiceService,
    private searchFormService: SearchFormServiceService
  ) { }

  ngOnInit(): void {
    // subscribing a behavior subject in the filter form
    this.filterFormService.categoryEmitter$.subscribe((value) => {
      this.category = value;
      this.loadAllProducts();
    })
    // subscribing a behavior subject in the filter form
    this.searchFormService.queryTextEmitter$.subscribe((value) => {
      this.queryText = value;
      this.loadSearchedProducts();
    })
  }
  
  // loading all products or filtered products
  loadAllProducts() {
    this.fetchAllProductsService.getProducts(this.category)
    .subscribe((data: any) => {
      this.products = data.products;
    })
  }

  // loading products based on search
  loadSearchedProducts() {
    this.fetchSearchedProductsService.getProducts(this.queryText)
    .subscribe((data: any) => {
      this.products = data.products;
    })
  } 
}