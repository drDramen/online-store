import { Container } from '@/components/container/container';
import { TopMenu } from '@/components/top-menu/top-menu';
import { Product } from '@/interfaces/product';
import { ProductService } from '@/services/product-services';
import { BaseComponent } from '@/templates/base-component';
import { ProductPageCard } from './product-page-card';

export class ProductPage extends BaseComponent {
  private topMenu: TopMenu = new TopMenu();
  private data: Product | undefined;
  private content: BaseComponent;
  container: Container;
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
  }
}
