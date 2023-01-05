import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './cart.scss';

const cartLink = { href: NameRoute.Cart };

export class HeaderCart extends BaseComponent {
  private cartLink: Link;

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

    const cartProductsAmount = new BaseComponent('span', {
      className: 'cart__products_amount',
    });
    cartProductsAmount.setContent('0');
    cartProductsCircle.append(cartProductsAmount);

    Link.addNavigationLink(this.cartLink);
  }
}
