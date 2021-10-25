import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
})
export class ClientDetailPage implements OnInit {
  client: Client | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientApi: ClientsApiService,
    private alertController: AlertController,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.clientApi.findClientById(id).subscribe({
      next: (data) => (this.client = data),
    });
  }
}
