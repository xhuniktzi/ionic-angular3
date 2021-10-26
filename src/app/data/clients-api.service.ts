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

  findByNameAndNit(name: string, nit: string): Observable<Client[]> {
    return this.api.get<Client[]>(
      `${environment.apiUrl}/clients/findByNameAndNit?name=${name}&nit=${nit}`
    );
  }

  saveClient(client: Client): Observable<any> {
    return this.api.post(`${environment.apiUrl}/clients`, client);
  }

  updateClient(id: number, client: Client): Observable<any> {
    return this.api.put(`${environment.apiUrl}/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.api.delete(`${environment.apiUrl}/clients/${id}`);
  }
}
