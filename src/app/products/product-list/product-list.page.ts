import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from '../../common/product';
import { ProductsApiService } from '../../data/products-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products: Product[] = [];

  constructor(private productApi: ProductsApiService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.productApi.getAllProducts().subscribe({
      next: (data) => (this.products = data),
    });
  }
}
