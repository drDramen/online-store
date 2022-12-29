import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class BrandsPage extends BaseComponent {
  private container: Container;

  constructor() {
    super('div', { className: 'brands' });

    this.container = new Container('brands__container');
    this.container.setInnerHTML('BrandsPage'); // TEMPORARY
    this.append(this.container);
  }
}
