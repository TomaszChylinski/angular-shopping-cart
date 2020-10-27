import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/app/config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          console.log("show me the items of result:", item)
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].quantity++;
              productExists = true;
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
