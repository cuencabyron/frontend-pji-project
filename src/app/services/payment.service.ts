import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';
import { Payment } from '../models/payment.dto';

@Injectable({ providedIn: 'root' })

export class PaymentService 
{
  private readonly baseUrl = `${environment.apiBaseUrl}/payments`;

  constructor(private http: HttpClient) {}

  createPayment(dto: Partial<Payment>): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, dto);
  }
}