import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path:  'home', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductViewComponent}, 
];