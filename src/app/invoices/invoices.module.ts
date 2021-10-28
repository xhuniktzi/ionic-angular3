import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesPageRoutingModule } from './invoices-routing.module';

import { InvoicesPage } from './invoices.page';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { SelectProductComponent } from './select-product/select-product.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InvoicesPageRoutingModule],
  declarations: [InvoicesPage, InvoiceListComponent, SelectProductComponent],
})
export class InvoicesPageModule {}
