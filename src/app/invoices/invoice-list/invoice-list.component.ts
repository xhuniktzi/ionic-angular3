import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InvoiceDetail } from 'src/app/common/invoice-detail';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceListComponent implements OnInit {
  @Input() products: InvoiceDetail[] = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      value: null,
    });
  }

  delete(id: number) {
    this.modalController.dismiss({
      value: id,
    });
  }
}
