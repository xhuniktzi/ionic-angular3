import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage implements OnInit {
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

  constructor(private productApi: ProductsApiService, private router: Router) {}

  ngOnInit() {}

  submit(): void {
    this.productApi.saveProduct(this.product).subscribe({
      next: (data) => this.router.navigate(['/products', data.code]),
    });
  }
}
