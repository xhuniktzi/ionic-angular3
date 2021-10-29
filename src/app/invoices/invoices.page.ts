import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Branch } from '../common/branch';
import { Client } from '../common/client';
import { InvoiceDetail } from '../common/invoice-detail';
import { InvoiceDetailDto } from '../common/invoice-detail-dto';
import { InvoiceApiService } from '../data/invoice-api.service';
import { FeedbackService } from '../services/feedback.service';
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
  orderDate: string = new Date().toISOString().split('T')[0];
  serial: string | undefined;
  invoiceNumber: number | undefined;

  currentClient: Client | undefined;
  currentBranch: Branch | undefined;

  products: InvoiceDetail[] = [];

  constructor(
    private modalController: ModalController,
    private feedbackService: FeedbackService,
    private invoiceApi: InvoiceApiService
  ) {}

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
        const duplicates: number = this.products.filter(
          (item) =>
            item.product?.product_Id === info.data.value.product.product_Id
        ).length;

        if (duplicates > 0) {
          this.feedbackService.showInfo(
            'No puede ingresar un producto duplicado'
          );
        } else {
          this.products.push(info.data.value);
        }
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

  submit() {
    if (this.orderDate === null || this.orderDate.match(/^ *$/) !== null) {
      this.feedbackService.showInfo('Debe ingresar una fecha valida');
    } else if (
      this.serial === undefined ||
      this.serial.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar una serie para la factura');
    } else if (
      this.invoiceNumber === undefined ||
      this.invoiceNumber === null
    ) {
      this.feedbackService.showInfo('Debe ingresar un numero de factura');
    } else if (
      this.currentClient === undefined ||
      this.currentClient === null
    ) {
      this.feedbackService.showInfo('Debe seleccionar un cliente');
    } else if (
      this.currentBranch === undefined ||
      this.currentBranch === null
    ) {
      this.feedbackService.showInfo('Debe seleccionar una sucursal');
    } else if (!(this.products.length > 0)) {
      this.feedbackService.showInfo('Debe tener al menos un producto agregado');
    } else {
      const details = this.products.map((item) => {
        const detail: InvoiceDetailDto = {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Product_Id: item.product?.product_Id ?? 0,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Quantity: item.quantity ?? 0,
        };
        return detail;
      });

      this.invoiceApi
        .saveInvoices({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Serial_Number: this.serial,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Invoice_Number: this.invoiceNumber,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Client_Id: this.currentClient.client_Id,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Branch_Id: this.currentBranch.branch_Id,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Order_Date: this.orderDate,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Product_Detail: details,
        })
        .subscribe({
          next: () => {
            this.feedbackService.showInfo('Factura creada correctamente');
            this.clearForm();
          },
          error: (err) => {
            this.feedbackService.showInfo(`${err}`);
          },
        });
    }
  }

  private setClient(client: Client | null): void {
    this.currentClient = client;
  }

  private setBranch(branch: Branch | null): void {
    this.currentBranch = branch;
  }

  private clearForm() {
    this.orderDate = new Date().toISOString().split('T')[0];
    this.serial = undefined;
    this.invoiceNumber = undefined;
    this.currentBranch = undefined;
    this.currentClient = undefined;
    this.products.splice(0, this.products.length);
  }
}
