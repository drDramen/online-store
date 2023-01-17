import { products } from '../../../data/product-data';
import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './card-full.scss';
import { Product } from '@/interfaces/product';

export class CardFull extends BaseComponent {
  private heartToCart: BaseComponent;
  private detailsLink: Link;
  private counter = 0;
  private cardButtonAddToCart: BaseComponent;
  private cardPrice: BaseComponent;
  private amountOfAddedProduct: BaseComponent;

  constructor(private data: Product) {
    super('div', {
      className: 'card',
    });

    const cardFrame = new BaseComponent('div', { className: 'card__frame' });
    this.append(cardFrame);

    const heartPrice = new BaseComponent('div', { className: 'card__product_price_heart' });
    cardFrame.append(heartPrice);

    const productPriceHolder = new BaseComponent('div', {
      className: 'card__product_price_holder',
    });
    heartPrice.append(productPriceHolder);

    const productPrice = new BaseComponent('span', { className: 'card__product_price' });
    productPrice.setContent(`${data.price}$`);
    productPriceHolder.append(productPrice);

    this.heartToCart = new BaseComponent('span', { className: 'card__heart' });
    heartPrice.append(this.heartToCart);
    this.heartToCart.getNode().addEventListener('click', () => {
      this.heartToCart.toggleClass('active');
    });

    const productImage = new BaseComponent('span', { className: 'card__product_image' });
    productImage.getNode().style.backgroundImage = `url('${location.origin}/${data.pics[0]}')`;
    cardFrame.append(productImage);

    this.detailsLink = new Link({
      href: NameRoute.Product.replace(':id', data.id),
      className: 'details_link',
    });
    cardFrame.append(this.detailsLink);

    const productDetails = new BaseComponent('span', { className: 'card__details' });
    productDetails.setContent('Details');
    this.detailsLink.append(productDetails);

    const cardTitle = new BaseComponent('div', { className: 'card__title' });
    this.append(cardTitle);

    const brandName = new BaseComponent('div', { className: 'card__title brand_name' });
    brandName.setContent(`${data.brandName}`);
    cardTitle.append(brandName);

    const productName = new BaseComponent('div', { className: 'card__title product_name' });
    productName.setContent(`${data.productName}`);
    cardTitle.append(productName);

    const buttonsHolder = new BaseComponent('div', { className: 'card__buttons_holder' });
    this.append(buttonsHolder);

    const cardButtonAmount = new BaseComponent('div', {
      className: 'card__buttons_holder button amount',
    });
    buttonsHolder.append(cardButtonAmount);

    const minusItem = new BaseComponent('span', { className: 'minus' });
    minusItem.setContent('-');
    cardButtonAmount.append(minusItem);

    this.amountOfAddedProduct = new BaseComponent('span', {
      className: 'added_number',
    });
    this.amountOfAddedProduct.setContent('0');
    cardButtonAmount.append(this.amountOfAddedProduct);

    const plusItem = new BaseComponent('span', { className: 'plus' });
    plusItem.setContent('+');
    cardButtonAmount.append(plusItem);

    plusItem.getNode().addEventListener('click', () => {
      const temp = products.find((element) => element.id === '0220');
      if (temp) {
        if (temp && this.counter < temp.availableAmount) {
          this.counter++;
          this.amountOfAddedProduct.setInnerHTML(this.counter.toString());
        }
      }
    });

    minusItem.getNode().addEventListener('click', () => {
      if (this.counter > 0) {
        this.counter--;
        this.amountOfAddedProduct.setInnerHTML(this.counter.toString());
      }
    });

    this.cardPrice = new BaseComponent('div', { className: 'card__buttons_holder sum' });
    this.cardPrice.setContent(`${'0'}$`);
    buttonsHolder.append(this.cardPrice);

    this.cardButtonAddToCart = new BaseComponent('div', {
      className: 'card__buttons_holder button add',
    });
    this.cardButtonAddToCart.setContent('Add to Cart');
    buttonsHolder.append(this.cardButtonAddToCart);
  }

  changeCardView() {
    this.toggleClass('card--active');
  }
}
