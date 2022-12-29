import { BaseComponent } from '@/templates/base-component';
import './card-full.scss';

export class CardFull extends BaseComponent {
  private cardFrame: BaseComponent;
  private productImage: BaseComponent;

  constructor() {
    super('div', {
      className: 'card_full',
    });

    this.cardFrame = new BaseComponent('div', { className: 'card__frame' });
    this.append(this.cardFrame);

    this.productImage = new BaseComponent('span', { className: 'card__product_image' });
    this.cardFrame.append(this.productImage);
  }
}
