import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.html'],
})
export class ListComponent implements OnInit {
  productList: Product[] = [];
  wishList: number[] = [];

  constructor(
    private productService: ProductsService,
    private wishListService: WishListService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadWishList();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((produts) => {
      this.productList = produts;
      // console.log('show me product list: ', this.productList);
    });
  }

  loadWishList() {
    this.wishListService.getWishList().subscribe(productIds => {
      console.log('show new wish list on onit: ', productIds);
      this.wishList = productIds;
    });
  }
}
