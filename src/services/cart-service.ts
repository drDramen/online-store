import { Product } from '@/interfaces/product';

export class CartService {
  private static cart: { product: Product; count: number }[] = [];

  static addToCart(product: Product) {
    const productInCart = this.cart.find(({ product: prod }) => prod.id === product.id);

    if (productInCart === undefined) {
      this.cart.push({ product, count: 1 });
    } else {
      productInCart.count += 1;
    }
  }

  static removeFromCart(product: Product) {
    this.cart = this.cart.filter(({ product: prod }) => prod.id !== product.id);
  }

  static calculateAmount() {
    return this.cart.reduce((acc, crnt) => acc + crnt.count, 0);
  }

  static getDataCart() {
    return this.cart;
  }
}
