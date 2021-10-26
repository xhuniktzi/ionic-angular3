import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Client } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';

@Component({
  selector: 'app-client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: ['./client-picker.component.scss'],
})
export class ClientPickerComponent implements OnInit {
  results: Client[] = [];
  name = '';
  nit = '';

  constructor(
    private modalController: ModalController,
    private clientApi: ClientsApiService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.clientApi.getAllClients().subscribe({
      next: (data) => (this.results = data),
    });
  }

  dismiss() {
    this.modalController.dismiss({
      value: null,
    });
  }

  search() {
    this.clientApi.findByNameAndNit(this.name, this.nit).subscribe({
      next: (data) => (this.results = data),
    });
  }

  select(client: Client) {
    this.modalController.dismiss({
      value: client,
    });
  }
}
