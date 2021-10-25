import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../common/client';
import { CommonApiService } from './common-api.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsApiService {
  constructor(private api: CommonApiService) {}

  getAllClients(): Observable<Client[]> {
    return this.api.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  findClientById(id: number): Observable<Client> {
    return this.api.get<Client>(`${environment.apiUrl}/clients/${id}`);
  }
}
