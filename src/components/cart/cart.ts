import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './cart.scss';
import { CartService } from '@/services/cart-service';

const cartLink = { href: NameRoute.Cart };

export class HeaderCart extends BaseComponent {
  private cartLink: Link;
  private cartProductsAmount: BaseComponent<'span'>;

  constructor() {
    super('div', {
      className: 'cart',
    });

    this.cartLink = new Link({ ...cartLink, className: 'cart__link' });
    this.append(this.cartLink);

    const cartText = new BaseComponent('div', { className: 'cart__text' });
    cartText.setInnerHTML('Cart');
    this.cartLink.append(cartText);

    const cartImage = new BaseComponent('span', { className: 'cart__image' });
    this.cartLink.append(cartImage);

    const cartProductsCircle = new BaseComponent('span', {
      className: 'cart__products_circle',
    });
    this.cartLink.append(cartProductsCircle);

    this.cartProductsAmount = new BaseComponent('span', {
      className: 'cart__products_amount',
    });
    this.cartProductsAmount.setContent('0');
    cartProductsCircle.append(this.cartProductsAmount);

    CartService.amountInCart.subscribe(this.updateAmount);

    Link.addNavigationLink(this.cartLink);
  }

  updateAmount = (value: number) => {
    this.cartProductsAmount.setContent(`${value}`);
  };

  destroy() {
    CartService.amountInCart.unsubscribe(this.updateAmount);
    super.destroy();
  }
}
