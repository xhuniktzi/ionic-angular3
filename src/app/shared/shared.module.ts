import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientItemComponent } from './client-item/client-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { FormsModule } from '@angular/forms';
import { BranchPickerComponent } from './branch-picker/branch-picker.component';
import { BranchItemComponent } from './branch-item/branch-item.component';

@NgModule({
  declarations: [
    ClientItemComponent,
    ProductItemComponent,
    BranchItemComponent,
    ClientPickerComponent,
    BranchPickerComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ClientItemComponent,
    ProductItemComponent,
    BranchItemComponent,
    ClientPickerComponent,
    BranchPickerComponent,
  ],
})
export class SharedModule {}
