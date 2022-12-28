import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './header-cart.scss';

const cartLink = [{ textContent: '', href: NameRoute.Cart }];

export class HeaderCart extends BaseComponent {
  private cartText: BaseComponent;
  private cartImage: BaseComponent;
  private cartProductsCircle: BaseComponent;
  private cartProductsAmount: BaseComponent;

  constructor() {
    super('div', {
      className: 'cart__header',
    });

    this.cartText = new BaseComponent('div', { className: 'cart__header__text' });
    this.cartText.setInnerHTML('Cart');
    this.append(this.cartText);

    this.cartImage = new BaseComponent('span', { className: 'cart__header__image' });
    this.append(this.cartImage);

    this.cartProductsCircle = new BaseComponent('span', {
      className: 'cart__header__products_circle',
    });
    this.append(this.cartProductsCircle);

    this.cartProductsAmount = new BaseComponent('span', {
      className: 'cart__header__products_amount',
    });
    this.cartProductsAmount.setContent('0');
    this.cartProductsCircle.append(this.cartProductsAmount);
  }
}
