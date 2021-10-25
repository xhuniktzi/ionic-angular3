import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientListPageRoutingModule } from './client-list-routing.module';
import { ClientListPage } from './client-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ClientListPageRoutingModule,
  ],
  declarations: [ClientListPage],
})
export class ClientListPageModule {}
