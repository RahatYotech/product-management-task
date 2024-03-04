import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormServiceService } from '../Services/search-form-service.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {
  searchForm = new FormGroup({
    queryText: new FormControl('')
  })

  queryText: string = "";

  constructor( private searchFormService: SearchFormServiceService ) { }

  submitSearchForm() {
    this.queryText = this.searchForm.value.queryText ?? '';
    this.searchFormService.raiseQueryTextEmitterEvent(this.queryText);
  }
}
