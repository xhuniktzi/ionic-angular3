import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditPage } from './client-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditPageRoutingModule {}
