import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InvoiceDetail } from 'src/app/common/invoice-detail';
import { Product } from 'src/app/common/product';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ProductPickerComponent } from 'src/app/shared/product-picker/product-picker.component';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss'],
})
export class SelectProductComponent implements OnInit {
  currentProduct: Product | undefined;
  quantity: number | undefined;

  constructor(
    private modalController: ModalController,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      value: null,
    });
  }

  select() {
    if (this.currentProduct === undefined || this.currentProduct === null) {
      this.feedbackService.showInfo('Debes seleccionar un producto');
    } else if (!(this.quantity >= 1)) {
      this.feedbackService.showInfo('La cantidad debe ser mayor o igual a 1');
    } else {
      const detail: InvoiceDetail = {
        product: this.currentProduct,
        quantity: this.quantity,
        total: this.currentProduct.price * this.quantity,
      };

      this.modalController.dismiss({
        value: detail,
      });
    }
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
