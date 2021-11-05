import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportResult } from 'src/app/common/report-result';
import { ReportInvoiceComponent } from '../report-invoice/report-invoice.component';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  @Input() results: ReportResult[] = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  async view(result: ReportResult) {
    // console.log(id);
    const modal = await this.modalController.create({
      component: ReportInvoiceComponent,
      componentProps: {
        result,
      },
    });

    modal.present();
  }
}
