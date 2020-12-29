import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

import {productUrl } from 'src/app/config/api';



@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{ // always specificy the outcome of the observable -- this observable will become an product array
    return this.http.get<Product[]>(productUrl); // This returns an obserberable 
  }
}
