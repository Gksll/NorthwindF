import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponceModel } from '../models/productResponceModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'https://localhost:7179/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponceModel> {
    return this.httpClient.get<ProductResponceModel>(this.apiUrl);
  }

}
