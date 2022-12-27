import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class CatalogPage extends BaseComponent {
  container: Container;

  constructor() {
    super('div', { className: 'catalog' });

    this.container = new Container('catalog__container');
    this.container.setInnerHTML('CatalogPage'); // TEMPORARY
    this.append(this.container);
  }
}
