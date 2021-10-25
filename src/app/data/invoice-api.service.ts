import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
