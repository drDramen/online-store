import { Product } from '@/interfaces/product';
import { BaseComponent } from '@/templates/base-component';
import { CardFull } from '../cards/card-full/card-full';

export class ProductContainer extends BaseComponent {
  constructor() {
    super('div', { className: 'catalog__products products' });
  }

  updateProduct(data: Product[]) {
    this.clear();
    data.forEach((product) => {
      const card = new CardFull(product);
      this.append(card);
    });
  }

  private clear() {
    this.children = [];
    this.setInnerHTML('');
  }
}
