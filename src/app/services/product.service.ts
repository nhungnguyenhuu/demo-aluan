import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>('http://127.0.0.1:8000/dearles');
  }
}
