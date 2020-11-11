import { Injectable } from '@angular/core';
import { wishListUrl } from 'src/app/config/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private http: HttpClient) {}

  getWishList() {
    return this.http.get(wishListUrl).pipe(
      map((result: any[]) => {
        let productIds = [];

        result.forEach(item => productIds.push(item.id));
        return productIds;
      })
    );
  }

  addToWishList(productId){
    return this.http.post(wishListUrl, { productId });
  }

  removeFromWishList(productId) {
    return this.http.delete(wishListUrl + '/' + productId);
  }
}
