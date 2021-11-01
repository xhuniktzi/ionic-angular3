import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportQueryPageRoutingModule } from './report-query-routing.module';

import { ReportQueryPage } from './report-query.page';
import { ReportListComponent } from '../report-list/report-list.component';
import { ReportInvoiceComponent } from '../report-invoice/report-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportQueryPageRoutingModule,
  ],
  declarations: [ReportQueryPage, ReportListComponent, ReportInvoiceComponent],
})
export class ReportQueryPageModule {}
