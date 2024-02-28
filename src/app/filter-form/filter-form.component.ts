import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterFormServiceService } from '../Services/filter-form-service.service';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css'
})
export class FilterFormComponent {
  filterForm = new FormGroup({
    category: new FormControl('')
  })

  private filterFormService = inject(FilterFormServiceService);

  constructor() {}

  // this method will be called from the template on form submit
  submitFilterForm(){
    this.filterFormService.sendFilterFormData(
      this.filterForm.value.category ?? 'no-category'
    );
  }
}
