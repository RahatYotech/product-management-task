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
      this.productId = id;
    });
    this.loadSingleProduct(this.productId);
  }

  loadSingleProduct(ID: any) {
    this.fetchSingleProductService.getSingleProduct(ID)
    .subscribe((data: any) => {
      this.productDetails = data; 
    })
  }
}