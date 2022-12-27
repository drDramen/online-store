import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class ProductPage extends BaseComponent {
  container: Container;

  constructor() {
    super('div', { className: 'product' });

    this.container = new Container('product__container');
    this.container.setInnerHTML('ProductPage'); // TEMPORARY
    this.append(this.container);
  }
}
