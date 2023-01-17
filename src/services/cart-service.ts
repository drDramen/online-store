import { CartItem } from '@/interfaces/cartData';
import { Product } from '@/interfaces/product';
import Observable from '@/utils/observer';

export class CartService {
  static readonly cartData = new Observable<CartItem[]>([]);
  static readonly amountInCart = new Observable<number>(0);
  static readonly sumInCart = new Observable<number>(0);

  static addToCart(product: Product) {
    this.cartData.notify((value) => {
      const productInCart = value.find(({ product: prod }) => prod.id === product.id);

      if (productInCart === undefined) {
        value.push({ product, count: 1 });
      } else {
        productInCart.count += 1;
      }
      return value;
    });
  }

  static removeFromCart(product: Product) {
    this.cartData.notify((value) => value.filter(({ product: prod }) => prod.id !== product.id));
  }

  static removeAllFromCart() {
    this.cartData.notify(() => []);
  }

  static decreaseByOne(product: Product) {
    this.cartData.notify((value) => {
      const productInCart = value.find(({ product: prod }) => prod.id === product.id);
      if (productInCart === undefined) {
        return value;
      }

      if (productInCart.count === 1) {
        return value.filter(({ product: prod }) => prod.id !== product.id);
      } else {
        productInCart.count -= 1;
      }
      return value;
    });
  }

  static calculateAmount = (value: CartItem[]) => {
    this.amountInCart.notify(value.reduce((acc, crnt) => acc + crnt.count, 0));
  };

  static calculateSum = (value: CartItem[]) => {
    this.sumInCart.notify(value.reduce((acc, crnt) => acc + crnt.count * crnt.product.price, 0));
  };
}

CartService.cartData.subscribe(CartService.calculateAmount);
CartService.cartData.subscribe(CartService.calculateSum);
