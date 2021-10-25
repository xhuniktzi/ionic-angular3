import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditPageRoutingModule } from './client-edit-routing.module';

import { ClientEditPage } from './client-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditPageRoutingModule
  ],
  declarations: [ClientEditPage]
})
export class ClientEditPageModule {}
