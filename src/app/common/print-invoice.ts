import { InvoiceDetail } from './invoice-detail';

/* eslint-disable @typescript-eslint/naming-convention */
export interface PrintInvoice {
  serial_Number: string;
  invoice_Number: number;
  client_Name: string;
  client_Direction: string;
  client_Nit: string;
  branch_Id: number;
  branch_Name: string;
  branch_Direction: string;
  order_Date: string;
  total: number;
  product_Detail: InvoiceDetail[];
}
