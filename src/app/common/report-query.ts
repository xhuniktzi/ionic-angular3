/* eslint-disable @typescript-eslint/naming-convention */
export interface ReportQuery {
  Start_Date: string;
  End_Date: string;
  Serial_Number: string | undefined;
  Invoice_Number: number | undefined;
  Client_Id: number | undefined;
  Product_Id: number | undefined;
  Branch_Id: number | undefined;
}
