import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Branch } from '../common/branch';
import { Client } from '../common/client';
import { InvoiceDetail } from '../common/invoice-detail';
import { BranchPickerComponent } from '../shared/branch-picker/branch-picker.component';
import { ClientPickerComponent } from '../shared/client-picker/client-picker.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { SelectProductComponent } from './select-product/select-product.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  currentClient: Client | undefined;
  currentBranch: Branch | undefined;

  products: InvoiceDetail[] = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async selectClient() {
    const modal = await this.modalController.create({
      component: ClientPickerComponent,
    });

    modal.onWillDismiss().then((info) => {
      this.setClient(info.data.value);
    });
    modal.present();
  }

  async selectBranch() {
    const modal = await this.modalController.create({
      component: BranchPickerComponent,
    });

    modal.onWillDismiss().then((info) => {
      this.setBranch(info.data.value);
    });

    modal.present();
  }

  async addProduct() {
    const modal = await this.modalController.create({
      component: SelectProductComponent,
    });

    modal.onWillDismiss().then((info) => {
      if (info.data.value !== null) {
        this.products.push(info.data.value);
      }
    });

    modal.present();
  }

  async viewProducts() {
    const modal = await this.modalController.create({
      component: InvoiceListComponent,
      componentProps: {
        products: this.products,
      },
    });

    modal.onWillDismiss().then((info) => {
      if (info.data.value !== null) {
        this.products = this.products.filter(
          (e) => e.product.product_Id !== info.data.value
        );
      }
    });

    modal.present();
  }

  private setClient(client: Client | null): void {
    this.currentClient = client;
  }

  private setBranch(branch: Branch | null): void {
    this.currentBranch = branch;
  }
}
