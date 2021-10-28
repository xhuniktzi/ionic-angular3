import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InvoiceDetail } from 'src/app/common/invoice-detail';
import { Product } from 'src/app/common/product';
import { ProductPickerComponent } from 'src/app/shared/product-picker/product-picker.component';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss'],
})
export class SelectProductComponent implements OnInit {
  currentProduct: Product | undefined;
  quantity: number | undefined;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      value: null,
    });
  }

  select() {
    const detail: InvoiceDetail = {
      product: this.currentProduct,
      quantity: this.quantity,
      total: this.currentProduct.price * this.quantity,
    };

    this.modalController.dismiss({
      value: detail,
    });
  }

  async selectProduct() {
    const modal = await this.modalController.create({
      component: ProductPickerComponent,
    });

    modal.onWillDismiss().then((info) => {
      this.setProduct(info.data.value);
    });

    modal.present();
  }

  private setProduct(product: Product | null): void {
    this.currentProduct = product;
  }
}
