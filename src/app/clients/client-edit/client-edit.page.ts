import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.page.html',
  styleUrls: ['./client-edit.page.scss'],
})
export class ClientEditPage implements OnInit {
  client: Client = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    client_Id: undefined,
    name: '',
    nit: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    phone_Number: '',
    direction: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    e_Mail: '',
  };

  constructor(
    private route: ActivatedRoute,
    private clientApi: ClientsApiService,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.clientApi.findClientById(id).subscribe({
      next: (data) => (this.client = data),
    });
  }

  submit() {
    if (this.client.name === null || this.client.name.match(/^ *$/) !== null) {
      this.feedbackService.showInfo('Debe ingresar un nombre');
    } else if (
      this.client.nit === null ||
      this.client.nit.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar un nit');
    } else if (
      this.client.direction === null ||
      this.client.direction.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar una direccion');
    } else {
      this.clientApi
        .updateClient(this.client.client_Id, this.client)
        .subscribe({
          next: () => this.router.navigate(['/clients', this.client.client_Id]),
        });
    }
  }
}
