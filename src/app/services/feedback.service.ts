import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private alertCtrl: AlertController) {}

  async showInfo(msg: string) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: ['OK'],
    });

    alert.present();
  }
}
