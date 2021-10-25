import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';
import { FeedbackService } from 'src/app/services/feedback.service';

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
    private productApi: ProductsApiService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    const code = this.route.snapshot.paramMap.get('code');
    this.productApi.findProductByCode(code).subscribe({
      next: (data) => (this.product = data),
    });
  }

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
      this.productApi.updateProduct(this.product.code, this.product).subscribe({
        next: () => this.router.navigate(['/products', this.product.code]),
      });
    }
  }
}
