import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportResult } from 'src/app/common/report-result';

@Component({
  selector: 'app-report-invoice',
  templateUrl: './report-invoice.component.html',
  styleUrls: ['./report-invoice.component.scss'],
})
export class ReportInvoiceComponent implements OnInit {
  // @Input() id: number;
  // invoice: PrintInvoice | undefined;
  @Input() result: ReportResult;

  constructor(
    // private invoiceApi: InvoiceApiService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // this.invoiceApi.getInvoiceById(this.id).subscribe({
    //   next: (data) => (this.invoice = data),
    // });
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
