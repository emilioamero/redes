import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Customer } from './modelo/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) {


  }

  getCustomers() {
    return this.http.get(`${this.API_URI}/customers`);
  }
}
