import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branch } from '../common/branch';
import { CommonApiService } from './common-api.service';

@Injectable({
  providedIn: 'root',
})
export class BranchApiService {
  constructor(private api: CommonApiService) {}

  getAllBranches(): Observable<Branch[]> {
    return this.api.get<Branch[]>(`${environment.apiUrl}/branches`);
  }

  findBranchByName(name: string): Observable<Branch[]> {
    return this.api.get<Branch[]>(
      `${environment.apiUrl}/branches/findByName/${name}`
    );
  }
}
