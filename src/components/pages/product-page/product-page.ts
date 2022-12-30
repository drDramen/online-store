import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './product-page.scss';

export class ProductPage extends BaseComponent {
  container: Container;
  private wrapper: BaseComponent;
  private leftBlock: BaseComponent;
  private rightBlock: BaseComponent;
  private productPics: BaseComponent;
  private productImage: BaseComponent;
  private priceHeart: BaseComponent;
  private heart: BaseComponent;
  private price: BaseComponent;

  constructor() {
    super('div', { className: 'product' });

    this.container = new Container('product__container');
    this.container.setInnerHTML('ProductPage'); // TEMPORARY
    this.append(this.container);

    this.wrapper = new BaseComponent('div', { className: 'wrapper' });
    this.container.append(this.wrapper);

    this.leftBlock = new BaseComponent('div', { className: 'left_block' });
    this.wrapper.append(this.leftBlock);

    this.productPics = new BaseComponent('div', { className: 'products_pics' });
    this.leftBlock.append(this.productPics);

    this.productImage = new BaseComponent('div', { className: 'product_image' });
    this.leftBlock.append(this.productImage);
    this.productImage.getNode().addEventListener('click', () => {
      this.productImage.toggleClass('popup');
    });

    this.priceHeart = new BaseComponent('div', { className: 'price_heart' });
    this.leftBlock.append(this.priceHeart);

    this.heart = new BaseComponent('span', { className: 'heart' });
    this.priceHeart.append(this.heart);
    this.heart.getNode().addEventListener('click', () => {
      this.heart.toggleClass('active');
    });

    this.price = new BaseComponent('div', { className: 'price' });
    this.price.setContent('20');
    this.priceHeart.append(this.price);

    this.rightBlock = new BaseComponent('div', { className: 'right_block' });
    this.wrapper.append(this.rightBlock);
  }
}
