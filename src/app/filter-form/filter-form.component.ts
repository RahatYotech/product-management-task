import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterFormServiceService } from '../Services/filter-form-service.service';
import { FetchAllProductsService } from '../Services/fetch-all-products.service';
import { FetchAllCategoriesService } from '../Services/fetch-all-categories.service';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css'
})

export class FilterFormComponent implements OnInit {
  filterForm = new FormGroup({
    category: new FormControl('')
  })

  products: any[] = [];
  categories: any[] = [];
  category: string = "";

  constructor(
    private filterFormService: FilterFormServiceService, 
    private fetchAllCategoriesService: FetchAllCategoriesService 
  ) {}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  submitFilterForm(){
    this.category = this.filterForm.value.category ?? '';
    this.filterFormService.raiseCategoryEmitterEvent(this.category);
  }

  loadAllCategories() {
    this.fetchAllCategoriesService.getCategories()
    .subscribe((data: any) => {
      this.categories = data;
    })
  }

}