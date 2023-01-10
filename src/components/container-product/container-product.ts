import { Product } from '@/interfaces/product';
import { BaseComponent } from '@/templates/base-component';
import { CardFull } from '../cards/card-full/card-full';

export class ProductContainer extends BaseComponent {
  constructor() {
    super('div', { className: 'catalog__products products' });
  }

  updateProduct(data: Product[]) {
    data.forEach((product) => {
      const card = new CardFull(product);
      this.append(card);
    });
  }

  changeWrapperDivisions() {
    let newValue = 4;
    const oldValue = +getComputedStyle(document.documentElement).getPropertyValue(
      '--product-column',
    );
    if (oldValue !== 1) {
      newValue = oldValue - 1;
      document.documentElement.style.setProperty('--product-column', newValue.toString());
    }
  }
}
