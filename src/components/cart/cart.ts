import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './cart.scss';

const cartLink = [{ textContent: 'Cart', href: NameRoute.Cart }];

export class HeaderCart extends BaseComponent {
  private cartText: BaseComponent;
  private cartImage: BaseComponent;
  private cartProductsCircle: BaseComponent;
  private cartProductsAmount: BaseComponent;
  private cartLink: Link;

  constructor() {
    super('div', {
      className: 'cart',
    });

    this.cartLink = new Link({ className: 'cart__link' });
    this.append(this.cartLink);

    this.cartText = new BaseComponent('div', { className: 'cart__text' });
    this.cartText.setInnerHTML('Cart');
    this.cartLink.append(this.cartText);

    this.cartImage = new BaseComponent('span', { className: 'cart__image' });
    this.cartLink.append(this.cartImage);

    this.cartProductsCircle = new BaseComponent('span', {
      className: 'cart__products_circle',
    });
    this.cartLink.append(this.cartProductsCircle);

    this.cartProductsAmount = new BaseComponent('span', {
      className: 'cart__products_amount',
    });
    this.cartProductsAmount.setContent('0');
    this.cartProductsCircle.append(this.cartProductsAmount);

    Link.addCartLink(cartLink);
  }
}
