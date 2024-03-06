import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FetchAllProductsService } from '../Services/fetch-all-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FilterFormServiceService } from '../Services/filter-form-service.service';
import { SearchFormServiceService } from '../Services/search-form-service.service';
import { FetchSearchedProductsService } from '../Services/fetch-searched-products.service';
import { AddProductServiceService } from '../Services/add-product-service.service';
import { CommonModule } from '@angular/common';
import { FetchAllCategoriesService } from '../Services/fetch-all-categories.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive, 
    PaginationComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  products: any[] = [];
  newProduct: {} = {};
  category: string = "";
  queryText: string = "";
  toastMsg: string = "";

  // Function to check if id number is odd
  isOdd(num: number): boolean {
    return num % 2 !== 0;
  }

  // Function to remove product
  onProductDelete(id: number): void {
    const filteredProductListAfterDelete = this.products.filter(product => product.id !== id);
    this.products = filteredProductListAfterDelete;
    this.toastMsg = `Product with ID: ${id} has been removed`;
  }

  constructor(
    private fetchAllProductsService: FetchAllProductsService,
    private fetchSearchedProductsService: FetchSearchedProductsService,
    private fetchCategoriesService: FetchAllCategoriesService,
    private filterFormService: FilterFormServiceService,
    private searchFormService: SearchFormServiceService, 
    private addProductService: AddProductServiceService,
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
    // subscribing a behavior subject in the add product form
    this.addProductService.newProductEmitter$.subscribe((value) => {
      this.newProduct = value;
      this.products.push(this.newProduct);
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

  // generating a random color 
  colors: { [key: string]: string } = {};
  getRandomColor(category: string): string {
    let resultColor: string = "";
    if (category in this.colors) {
      resultColor = this.colors[category];
    }
    else {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.colors[category] = color;
      resultColor = color;
    }
    return resultColor;
  }
}