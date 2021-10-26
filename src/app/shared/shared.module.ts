import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientItemComponent } from './client-item/client-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientItemComponent,
    ProductItemComponent,
    ClientPickerComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ClientItemComponent, ProductItemComponent, ClientPickerComponent],
})
export class SharedModule {}
