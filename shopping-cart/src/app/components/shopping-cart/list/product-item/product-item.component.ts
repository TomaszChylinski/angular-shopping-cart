import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import {WishListService} from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {

  @Input() addedToWishList: boolean;
  @Input() productItem: Product;


  constructor(
    private message: MessengerService,
    private cartService: CartService,
    private wishListService: WishListService
  ) {}

  ngOnInit() {}

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.message.sendMessage(this.productItem);
    });
  }

  addToWishList(){
    this.wishListService.addToWishList(this.productItem.id).subscribe(() => {
      this.message.sendMessage(this.productItem);
      this.addedToWishList = true;
    });
  }

  removeFromWishList(){
    this.wishListService.removeFromWishList(this.productItem.id).subscribe(() => {
      this.message.sendMessage(this.productItem);
      this.addedToWishList = false;
    });
  }

  loadWishList(){

  }
}
