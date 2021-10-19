import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productApi: ProductsApiService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    const code = this.route.snapshot.paramMap.get('code');
    this.productApi.findProductByCode(code).subscribe({
      next: (data) => (this.product = data),
    });
  }
}
