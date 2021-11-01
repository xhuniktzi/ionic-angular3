import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvoiceDto } from '../common/invoice-dto';
import { PrintInvoice } from '../common/print-invoice';
import { ReportQuery } from '../common/report-query';
import { CommonApiService } from './common-api.service';

@Injectable({
  providedIn: 'root',
})
export class InvoiceApiService {
  constructor(private api: CommonApiService) {}

  filterInvoices(query: ReportQuery): Observable<any> {
    return this.api.post(`${environment.apiUrl}/invoices/getInvoice`, query);
  }

  getInvoiceById(id: number): Observable<PrintInvoice> {
    return this.api.get<PrintInvoice>(`${environment.apiUrl}/invoices/${id}`);
  }

  saveInvoices(invoice: InvoiceDto): Observable<any> {
    return this.api.post(`${environment.apiUrl}/invoices`, invoice);
  }
}
