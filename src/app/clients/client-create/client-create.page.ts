import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.page.html',
  styleUrls: ['./client-create.page.scss'],
})
export class ClientCreatePage implements OnInit {
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
    private clientApi: ClientsApiService,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {}

  async submit() {
    if (this.client.name === null || this.client.name.match(/^ *$/) !== null) {
      this.feedbackService.showInfo('Debe ingresar un nombre');
    } else if (
      this.client.nit === null ||
      this.client.nit.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar un nit');
    } else if (this.client.nit.match(/\d+-[\d\w]/gm)) {
      this.feedbackService.showInfo('Debe ingresar un nit con formato valido');
    } else if (
      this.client.direction === null ||
      this.client.direction.match(/^ *$/) !== null
    ) {
      this.feedbackService.showInfo('Debe ingresar una direccion');
    } else if (
      !(
        this.client.phone_Number === null ||
        this.client.phone_Number.match(/^ *$/) !== null
      ) &&
      this.client.phone_Number.match(/[\d-]+/gm) === null
    ) {
      this.feedbackService.showInfo(
        'Debe ingresar una numero de telefono valido'
      );
    } else if (
      !(
        this.client.e_Mail === null || this.client.e_Mail.match(/^ *$/) !== null
      ) &&
      this.client.e_Mail.match(/\w+@\w+\.\w+/gm) === null
    ) {
      this.feedbackService.showInfo(
        'Debe ingresar una direccion de e-mail valida'
      );
    } else {
      this.clientApi.saveClient(this.client).subscribe({
        next: (data) => {
          this.router.navigate(['/clients', data.client_Id]);
        },
        error: async (err) => {
          this.feedbackService.showInfo(`Error: ${err}`);
        },
      });
    }
  }
}
