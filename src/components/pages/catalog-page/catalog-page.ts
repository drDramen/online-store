import { CardFull } from './../../cards/card-full/card-full';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class CatalogPage extends BaseComponent {
  container: Container;
  private cardFull: CardFull = new CardFull();

  constructor() {
    super('div', { className: 'catalog' });

    this.container = new Container('catalog__container');
    this.container.setInnerHTML('CatalogPage'); // TEMPORARY
    this.append(this.container);

    this.container.append(this.cardFull);
  }
}