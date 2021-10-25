import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportQueryPageRoutingModule } from './report-query-routing.module';

import { ReportQueryPage } from './report-query.page';
import { ReportListComponent } from '../report-list/report-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportQueryPageRoutingModule,
  ],
  declarations: [ReportQueryPage, ReportListComponent],
})
export class ReportQueryPageModule {}
