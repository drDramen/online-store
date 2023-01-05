import { FiltersChain } from './../../filters-chain/filters-chain';
import { TopMenu } from '@/components/top-menu/top-menu';
import { CardFull } from './../../cards/card-full/card-full';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class CatalogPage extends BaseComponent {
  container: Container;
  private cardFull: CardFull = new CardFull();
  private topMenu: TopMenu = new TopMenu();
  private filtersChain: FiltersChain = new FiltersChain();

  constructor() {
    super('div', { className: 'catalog' });

    this.container = new Container('catalog__container');
    this.append(this.container);

    this.container.append(this.topMenu);

    this.container.append(this.filtersChain);

    this.container.append(this.cardFull);
  }
}
