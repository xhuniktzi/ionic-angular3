import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportQuery } from 'src/app/common/report-query';
import { ReportResult } from 'src/app/common/report-result';
import { InvoiceApiService } from 'src/app/data/invoice-api.service';
import { ReportListComponent } from '../report-list/report-list.component';

@Component({
  selector: 'app-report-query',
  templateUrl: './report-query.page.html',
  styleUrls: ['./report-query.page.scss'],
})
export class ReportQueryPage implements OnInit {
  query: ReportQuery = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Start_Date: new Date().toISOString().split('T')[0],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    End_Date: new Date().toISOString().split('T')[0],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Serial_Number: undefined,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Invoice_Number: undefined,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Client_Id: undefined,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Product_Id: undefined,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Branch_Id: undefined,
  };

  constructor(
    private modalController: ModalController,
    private invoiceApiService: InvoiceApiService
  ) {}

  ngOnInit() {}

  async submit() {
    let results: ReportResult[] = [];
    this.invoiceApiService.filterInvoices(this.query).subscribe({
      next: async (data) => {
        results = data;
        // console.log(results);
        const modal = await this.modalController.create({
          component: ReportListComponent,
          componentProps: {
            results,
          },
        });

        await modal.present();
      },
    });

    // const modal = await this.modalController.create({
    //   component: ReportListComponent,
    //   componentProps: {
    //     results,
    //   },
    // });

    // await modal.present();
  }
}
