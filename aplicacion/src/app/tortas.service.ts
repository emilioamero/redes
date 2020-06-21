import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './modelo/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TortasService {
  API_URI:string = 'http://localhost:3000';
  constructor(private http: HttpClient) {


  }

  getTortas() {
    return this.http.get(`${this.API_URI}/tortas`);
  }
}
