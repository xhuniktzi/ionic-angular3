import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Branch } from 'src/app/common/branch';
import { Client } from 'src/app/common/client';
import { ReportQuery } from 'src/app/common/report-query';
import { ReportResult } from 'src/app/common/report-result';
import { InvoiceApiService } from 'src/app/data/invoice-api.service';
import { BranchPickerComponent } from 'src/app/shared/branch-picker/branch-picker.component';
import { ClientPickerComponent } from 'src/app/shared/client-picker/client-picker.component';
import { ReportListComponent } from '../report-list/report-list.component';

@Component({
  selector: 'app-report-query',
  templateUrl: './report-query.page.html',
  styleUrls: ['./report-query.page.scss'],
})
export class ReportQueryPage implements OnInit {
  currentClient: Client | undefined;
  currentBranch: Branch | undefined;

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
        const modal = await this.modalController.create({
          component: ReportListComponent,
          componentProps: {
            results,
          },
        });

        await modal.present();
      },
    });
  }

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

  private setClient(client: Client | null): void {
    this.currentClient = client;
    this.query.Client_Id = client?.client_Id;
  }

  private setBranch(branch: Branch | null): void {
    this.currentBranch = branch;
    this.query.Branch_Id = branch?.branch_Id;
  }
}
