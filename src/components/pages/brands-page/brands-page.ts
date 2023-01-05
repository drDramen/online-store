import { TopMenu } from '@/components/top-menu/top-menu';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './brands-page.scss';

export class BrandsPage extends BaseComponent {
  private container: Container;
  private topMenu: TopMenu = new TopMenu();

  constructor() {
    super('div', { className: 'brands' });

    this.append(this.topMenu);

    this.container = new Container('brands__container');
    this.container.setInnerHTML('BrandsPage'); // TEMPORARY
    this.append(this.container);
  }
}
