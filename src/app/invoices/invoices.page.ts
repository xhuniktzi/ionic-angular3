import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Branch } from '../common/branch';
import { Client } from '../common/client';
import { BranchPickerComponent } from '../shared/branch-picker/branch-picker.component';
import { ClientPickerComponent } from '../shared/client-picker/client-picker.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  currentClient: Client | undefined;
  currentBranch: Branch | undefined;

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

  private setClient(client: Client | null): void {
    this.currentClient = client;
  }

  private setBranch(branch: Branch | null): void {
    this.currentBranch = branch;
  }
}
