/* eslint-disable @typescript-eslint/naming-convention */
export interface Product {
  product_Id: number | undefined;
  code: string;
  name: string;
  description: string;
  price: number | undefined;
  min_Quantity: number | undefined;
}
