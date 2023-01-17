import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './filters-chain.scss';

export class FiltersChain extends BaseComponent {
  private container: Container;
  private filterItem: BaseComponent;
  private cross: BaseComponent;

  constructor() {
    super('div', { className: 'filters_chain' });

    this.container = new Container('filters_chain__container');
    this.append(this.container);

    this.filterItem = new BaseComponent('div', { className: 'filters_chain__item' });
    this.filterItem.setContent('lalala');
    this.container.append(this.filterItem);

    this.cross = new BaseComponent('span', { className: 'cross' });
    this.filterItem.append(this.cross);

    this.cross.getNode().addEventListener('click', () => {
      this.filterItem.remove();
    });
  }
}
