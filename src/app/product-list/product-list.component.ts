import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FetchAllProductsService } from '../Services/fetch-all-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FilterFormServiceService } from '../Services/filter-form-service.service';

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

  constructor(
    private fetchAllProductsService: FetchAllProductsService,
    private filterFormService: FilterFormServiceService
  ) { }

  ngOnInit(): void {
    this.filterFormService.categoryEmitter$.subscribe((value) => {
      this.category = value;
      this.loadAllProducts();
    })
  }
  
  loadAllProducts() {
    this.fetchAllProductsService.getProducts(this.category)
    .subscribe((data: any) => {
      this.products = data.products;
    })
    
  }
}