import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrintInvoice } from 'src/app/common/print-invoice';
import { InvoiceApiService } from 'src/app/data/invoice-api.service';

@Component({
  selector: 'app-report-invoice',
  templateUrl: './report-invoice.component.html',
  styleUrls: ['./report-invoice.component.scss'],
})
export class ReportInvoiceComponent implements OnInit {
  @Input() id: number;
  invoice: PrintInvoice | undefined;

  constructor(
    private invoiceApi: InvoiceApiService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.invoiceApi.getInvoiceById(this.id).subscribe({
      next: (data) => (this.invoice = data),
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
