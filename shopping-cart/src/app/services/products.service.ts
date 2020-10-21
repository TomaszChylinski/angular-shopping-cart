import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // TODO: Populate from an API
  products = [
    new Product(1, 'Product 1', 'This is the new product', 100),
    new Product(2, 'Product 2', 'This is the new product', 200),
    new Product(3, 'Product 3', 'This is the new product', 300),
    new Product(4, 'Product 4', 'This is the new product', 400),
  ];
  constructor() {}

  // TODO: Populate prodcuts from an API and return an Observable
  getProducts(): Product[]{
    return this.products;
  }
}
