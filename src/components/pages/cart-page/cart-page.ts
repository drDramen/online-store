import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class CartPage extends BaseComponent {
  private container: Container;

  constructor() {
    super('div', { className: 'cart' });

    this.container = new Container('cart__container');
    this.container.setInnerHTML('CartPage'); // TEMPORARY
    this.append(this.container);
  }
}
