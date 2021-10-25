import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientItemComponent } from './client-item/client-item.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ClientItemComponent, ProductItemComponent],
  imports: [CommonModule],
  exports: [ClientItemComponent, ProductItemComponent],
})
export class SharedModule {}
