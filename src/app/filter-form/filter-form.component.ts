import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterFormServiceService } from '../Services/filter-form-service.service';
import { FetchAllProductsService } from '../Services/fetch-all-products.service';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css'
})

export class FilterFormComponent {
  filterForm = new FormGroup({
    category: new FormControl('')
  })

  products: any[] = [];
  category: string = "";

  constructor(
    private filterFormService: FilterFormServiceService  
  ) {}

  submitFilterForm(){
    this.category = this.filterForm.value.category ?? ''
    this.filterFormService.raiseCategoryEmitterEvent(this.category);
  }

}