import { Overlay } from './../../overlay/overlay';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './product-page.scss';
import { TopMenu } from '@/components/top-menu/top-menu';
import { Product } from '@/interfaces/product';
import { ProductService } from '@/services/product-services';
import { ProductPageCard } from './product-page-card';

export class ProductPage extends BaseComponent {
  container: Container;
  private overlay: Overlay = new Overlay();
  private topMenu: TopMenu = new TopMenu();
  // private productImagePopup: BaseComponent;
  private content: BaseComponent;
  data: Product | undefined;

  constructor({ id }: Record<string, string>) {
    super('div', { className: 'product' });
    this.data = ProductService.getProduct(id);

    this.container = new Container('product__container');

    if (this.data) {
      this.content = new ProductPageCard(this.data);
    } else {
      this.content = new BaseComponent('div', {
        className: 'product__not-found',
        textContent: 'Not found',
      });
    }

    this.container.append(this.content);
    this.append(this.topMenu);
    this.append(this.container);
    this.append(this.overlay);
  }
}
