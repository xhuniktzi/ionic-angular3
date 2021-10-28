import { Product } from './product';

export class InvoiceDetail {
  product: Product | undefined;
  quantity: number | undefined;
  total: number | undefined;

  // public get total() {
  //   return (this.product?.price ?? 0) * (this.quantity ?? 0);
  // }
}
