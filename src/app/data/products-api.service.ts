import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';
import { CommonApiService } from './common-api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private api: CommonApiService) {}

  getAllProducts(): Observable<Product[]> {
    return this.api.get<Product[]>(`${environment.apiUrl}/products`);
  }

  findProductByCode(code: string): Observable<Product> {
    return this.api.get<Product>(`${environment.apiUrl}/products/${code}`);
  }
}
