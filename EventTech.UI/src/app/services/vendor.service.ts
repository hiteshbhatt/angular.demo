import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Vendor } from '../models/vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  httpClient: HttpClient = inject(HttpClient);
  constructor() {}

  getVendors(): Observable<HttpResponse<Vendor[]>> {
    return this.httpClient.get<Vendor[]>('http://localhost:5126/api/Vendor', {
      observe: 'response',
    });
  }
}
