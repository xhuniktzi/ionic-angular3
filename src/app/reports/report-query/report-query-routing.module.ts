import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportQueryPage } from './report-query.page';

const routes: Routes = [
  {
    path: '',
    component: ReportQueryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportQueryPageRoutingModule {}
