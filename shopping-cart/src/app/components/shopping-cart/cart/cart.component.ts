import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    // { id: 1, productId: 1, qty: 4, productTitle: 'prod1', price: 100 },
    // { id: 1, productId: 2, qty: 4, productTitle: 'prod12', price: 200 },
    // { id: 1, productId: 3, qty: 4, productTitle: 'prod13', price: 300 },
    // { id: 1, productId: 4, qty: 4, productTitle: 'prod14', price: 400 },
  ];

  cartTotal = 0;

  constructor(private message: MessengerService) {}

  ngOnInit() {
    this.message.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

    let productExists = false;

    for (const i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        productTitle: product.name,
        qty: 1,
        price: product.price,
      });
    }
  }
}
