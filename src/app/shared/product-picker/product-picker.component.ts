import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';

@Component({
  selector: 'app-product-picker',
  templateUrl: './product-picker.component.html',
  styleUrls: ['./product-picker.component.scss'],
})
export class ProductPickerComponent implements OnInit {
  results: Product[] = [];
  name = '';

  constructor(
    private modalController: ModalController,
    private productApi: ProductsApiService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.productApi.getAllProducts().subscribe({
      next: (data) => (this.results = data),
    });
  }

  search() {
    if (this.name === null || this.name.match(/^ *$/) != null) {
      this.productApi.getAllProducts().subscribe({
        next: (data) => (this.results = data),
      });
    } else {
      this.productApi.findProductByName(this.name).subscribe({
        next: (data) => (this.results = data),
      });
    }
  }

  select(product: Product) {
    this.modalController.dismiss({
      value: product,
    });
  }

  dismiss() {
    this.modalController.dismiss({
      value: null,
    });
  }
}
