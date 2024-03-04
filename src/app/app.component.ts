import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchSectionComponent } from './search-section/search-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    ProductFormComponent, 
    SearchSectionComponent,
    ProductListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  title = 'product-mgt-task';
}