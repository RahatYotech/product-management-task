import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductServiceService } from '../Services/add-product-service.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  productForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    brand: new FormControl(''),
    stock: new FormControl('') 
  })

  newProduct: {} = {};

  constructor ( private addProductService: AddProductServiceService ) { }

  submitAddProductForm() {
    this.newProduct = {
      id: this.productForm.value.id ?? '',
      title: this.productForm.value.title ?? '',
      description: this.productForm.value.description ?? '',
      price: this.productForm.value.price ?? '',
      category: this.productForm.value.category ?? '',
      brand: this.productForm.value.brand ?? '',
      stock: this.productForm.value.stock ?? ''
    }; 
    
    this.addProductService.raiseNewProductEmitterEvent(this.newProduct);
  }
}