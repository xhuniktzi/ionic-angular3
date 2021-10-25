import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientListPageRoutingModule } from './client-list-routing.module';

import { ClientListPage } from './client-list.page';
import { ClientItemComponent } from '../client-item/client-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientListPageRoutingModule,
  ],
  declarations: [ClientListPage, ClientItemComponent],
})
export class ClientListPageModule {}
