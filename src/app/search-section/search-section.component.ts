import { Component } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { FilterFormComponent } from '../filter-form/filter-form.component';

@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [
    SearchFormComponent, 
    FilterFormComponent
  ],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.css'
})
export class SearchSectionComponent {

}
