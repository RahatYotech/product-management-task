import { Component, OnInit, inject } from '@angular/core';
import { FetchSingleProductService } from '../Services/fetch-single-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {

  private fetchSingleProductService = inject(FetchSingleProductService);
  productDetails: any = {};
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      console.log('id:', id);
      this.productId = id;
      console.log('productId:', this.productId);
    });
    this.loadSingleProduct(this.productId);
  }


  loadSingleProduct(ID: any) {
    this.fetchSingleProductService.getSingleProduct(ID)
    .subscribe((data: any) => {
      console.log(data);
      this.productDetails = data; 
    })
  }
}
