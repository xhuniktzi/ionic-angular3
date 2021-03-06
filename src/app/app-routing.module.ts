import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/product-list/product-list.module').then(
        (m) => m.ProductListPageModule
      ),
  },
  {
    path: 'products/create',
    loadChildren: () =>
      import('./products/product-create/product-create.module').then(
        (m) => m.ProductCreatePageModule
      ),
  },
  {
    path: 'products/edit/:code',
    loadChildren: () =>
      import('./products/product-edit/product-edit.module').then(
        (m) => m.ProductEditPageModule
      ),
  },
  {
    path: 'products/:code',
    loadChildren: () =>
      import('./products/product-detail/product-detail.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/client-list/client-list.module').then(
        (m) => m.ClientListPageModule
      ),
  },
  {
    path: 'clients/create',
    loadChildren: () =>
      import('./clients/client-create/client-create.module').then(
        (m) => m.ClientCreatePageModule
      ),
  },
  {
    path: 'clients/edit/:id',
    loadChildren: () =>
      import('./clients/client-edit/client-edit.module').then(
        (m) => m.ClientEditPageModule
      ),
  },
  {
    path: 'clients/:id',
    loadChildren: () =>
      import('./clients/client-detail/client-detail.module').then(
        (m) => m.ClientDetailPageModule
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/report-query/report-query.module').then(
        (m) => m.ReportQueryPageModule
      ),
  },  {
    path: 'invoices',
    loadChildren: () => import('./invoices/invoices.module').then( m => m.InvoicesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
