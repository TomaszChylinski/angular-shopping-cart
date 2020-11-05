import { Injectable } from '@angular/core';
import { WishList } from '../models/wish-list';
import { wishListUrl } from 'src/app/config/api';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private http: HttpClient) {} //http enabled us to make calls

  // addToWishList(product: Product): Observable<any> {
  //   return this.http.post(wishListUrl, { product });
  // }

  addToWishList(product: Product): Observable<any> {
    return this.http.post(wishListUrl, { product });
  }
}


