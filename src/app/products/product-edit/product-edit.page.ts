import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  product: Product = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    product_Id: undefined,
    code: '',
    name: '',
    description: '',
    price: undefined,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    min_Quantity: undefined,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productApi: ProductsApiService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    const code = this.route.snapshot.paramMap.get('code');
    this.productApi.findProductByCode(code).subscribe({
      next: (data) => (this.product = data),
    });
  }

  submit(): void {
    this.productApi.updateProduct(this.product.code, this.product).subscribe({
      next: () => this.router.navigate(['/products', this.product.code]),
    });
  }
}
