import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FilteredProductsComponent } from './filtered-products/filtered-products.component';
import { ProductViewComponent } from './product-view/product-view.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path:  'home', component: ProductListComponent },
    { path:  'search-product', component: FilteredProductsComponent },
    // { path: 'product-details', component: ProductViewComponent },
    { path: 'product-details/:id', component: ProductViewComponent}
];