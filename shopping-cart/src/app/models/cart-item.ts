import { Product } from './product';

export class CartItem {
  id: number;
  productId: number;
  quantity: number;
  productTitle: string;
  price: number;

  constructor(id: number, product: Product, quantity = 1) {
    this.id = id;
    this.productId = product.id;
    this.productTitle = product.name;
    this.price = product.price;
    this.quantity = quantity;
  }
}
