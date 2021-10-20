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

  saveProduct(product: Product): Observable<any> {
    return this.api.post(`${environment.apiUrl}/products`, product);
  }

  updateProduct(code: string, product: Product): Observable<any> {
    return this.api.put(`${environment.apiUrl}/products/${code}`, product);
  }

  deleteProduct(code: string): Observable<any> {
    return this.api.delete(`${environment.apiUrl}/products/${code}`);
  }
}
