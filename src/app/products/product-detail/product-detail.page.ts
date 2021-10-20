import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private router: Router,
    private productApi: ProductsApiService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    const code = this.route.snapshot.paramMap.get('code');
    this.productApi.findProductByCode(code).subscribe({
      next: (data) => (this.product = data),
    });
  }

  async delete() {
    const alert = await this.alertController.create({
      message: `¿Esta seguro que desea eliminar el producto: ${this.product?.code} - ${this.product?.name}?`,
      buttons: [
        {
          text: 'SI',
          handler: () => {
            this.productApi.deleteProduct(this.product?.code).subscribe({
              next: () => {
                this.router.navigate(['/products']);
              },
            });
          },
        },
        {
          text: 'NO',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
