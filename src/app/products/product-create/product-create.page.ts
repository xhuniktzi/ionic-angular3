import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';
import { FeedbackService } from 'src/app/services/feedback.service';

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

  constructor(
    private productApi: ProductsApiService,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {}

  async submit() {
    if (
      this.product.code === null ||
      this.product.code.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar un codigo');
    } else if (
      this.product.name === null ||
      this.product.name.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar un nombre');
    } else if (
      this.product.price === undefined ||
      !(this.product.price >= 0.01)
    ) {
      this.feedbackService.showInfo('Debe ingresar un precio valido');
    } else if (
      this.product.min_Quantity === undefined ||
      !(this.product.min_Quantity >= 1)
    ) {
      this.feedbackService.showInfo('Debe ingresar una cantidad minima valida');
    } else {
      this.productApi.saveProduct(this.product).subscribe({
        next: (data) => {
          this.router.navigate(['/products', data.code]);
        },
        error: async (err) => {
          this.feedbackService.showInfo(`Error: ${err}`);
        },
      });
    }
  }
}
