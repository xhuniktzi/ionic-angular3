/* eslint-disable @typescript-eslint/naming-convention */
import { InvoiceDetailDto } from './invoice-detail-dto';

export interface InvoiceDto {
  Serial_Number: string;
  Invoice_Number: number;
  Client_Id: number;
  Branch_Id: number;
  Order_Date: string;
  Product_Detail: InvoiceDetailDto[];
}
