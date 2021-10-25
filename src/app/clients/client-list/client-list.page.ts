import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {
  clients: Client[] = [];

  constructor(private clientApi: ClientsApiService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.clientApi.getAllClients().subscribe({
      next: (data) => (this.clients = data),
    });
  }
}
