import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(
    private productApi: ProductsApiService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async submit() {
    if (
      this.product.code === null ||
      this.product.code.match(/^ *$/) !== null
    ) {
      const msg = await this.alertController.create({
        message: 'Debe ingresar un codigo',
        buttons: ['OK'],
      });
      await msg.present();
    } else if (
      this.product.name === null ||
      this.product.name.match(/^ *$/) !== null
    ) {
      const msg = await this.alertController.create({
        message: 'Debe ingresar un nombre',
        buttons: ['OK'],
      });
      await msg.present();
    } else if (
      this.product.price === undefined ||
      !(this.product.price >= 0.01)
    ) {
      const msg = await this.alertController.create({
        message: 'Debe ingresar un precio valido',
        buttons: ['OK'],
      });
      await msg.present();
    } else if (
      this.product.min_Quantity === undefined ||
      !(this.product.min_Quantity >= 1)
    ) {
      const msg = await this.alertController.create({
        message: 'Debe ingresar una cantidad minima valida',
        buttons: ['OK'],
      });
      await msg.present();
    } else {
      this.productApi.saveProduct(this.product).subscribe({
        next: (data) => {
          this.router.navigate(['/products', data.code]);
        },
        error: async (err) => {
          const msg = await this.alertController.create({
            message: `Error: ${err}`,
            buttons: ['OK'],
          });
          await msg.present();
        },
      });
    }
  }
}
