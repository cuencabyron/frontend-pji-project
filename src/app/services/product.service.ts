import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductDto } from '../models/create-product.dto';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService 
{
  private readonly baseUrl = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) {}

  // GET /products
  getAll() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // POST /products
  create(dto: CreateProductDto) {
    return this.http.post<Product>(this.baseUrl, dto);
  }
}