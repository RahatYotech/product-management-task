import { Component } from '@angular/core';
import { FilterFormComponent } from '../filter-form/filter-form.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FilterFormComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

}
