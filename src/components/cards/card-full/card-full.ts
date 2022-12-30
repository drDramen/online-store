import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './card-full.scss';

const detailsLink = { href: NameRoute.Product };

export class CardFull extends BaseComponent {
  private cardFrame: BaseComponent;
  private heartToCart: BaseComponent;
  private productImage: BaseComponent;
  private productDetails: BaseComponent;
  private brandName: BaseComponent;
  private productName: BaseComponent;
  private cardTitle: BaseComponent;
  private detailsLink: Link;
  private cardButtonAmount: BaseComponent;
  private buttonsHolder: BaseComponent;
  private cardButtonAddToCart: BaseComponent;
  private cardPrice: BaseComponent;
  private cardCurrency: BaseComponent;
  private cardSum: BaseComponent;
  private minusItem: BaseComponent;
  private amountOfAddedProduct: BaseComponent;
  private plusItem: BaseComponent;

  constructor() {
    super('div', {
      className: 'card',
    });

    this.cardFrame = new BaseComponent('div', { className: 'card__frame' });
    this.append(this.cardFrame);

    this.heartToCart = new BaseComponent('span', { className: 'card__heart' });
    this.cardFrame.append(this.heartToCart);
    this.heartToCart.getNode().addEventListener('click', () => {
      this.heartToCart.toggleClass('active');
    });

    this.productImage = new BaseComponent('span', { className: 'card__product_image' });
    this.cardFrame.append(this.productImage);

    this.detailsLink = new Link({ ...detailsLink, className: 'details_link' });
    this.cardFrame.append(this.detailsLink);

    this.productDetails = new BaseComponent('span', { className: 'card__details' });
    this.productDetails.setContent('Details');
    this.detailsLink.append(this.productDetails);

    this.cardTitle = new BaseComponent('div', { className: 'card__title' });
    this.append(this.cardTitle);

    this.brandName = new BaseComponent('div', { className: 'card__title brand_name' });
    this.brandName.setContent('brand name');
    this.cardTitle.append(this.brandName);

    this.productName = new BaseComponent('div', { className: 'card__title product_name' });
    this.productName.setContent('product name');
    this.cardTitle.append(this.productName);

    this.buttonsHolder = new BaseComponent('div', { className: 'card__buttons_holder' });
    this.append(this.buttonsHolder);

    this.cardButtonAmount = new BaseComponent('div', {
      className: 'card__buttons_holder button amount',
    });
    this.buttonsHolder.append(this.cardButtonAmount);

    this.minusItem = new BaseComponent('span', { className: 'minus' });
    this.minusItem.setContent('-');
    this.cardButtonAmount.append(this.minusItem);

    this.amountOfAddedProduct = new BaseComponent('span', {
      className: 'added_number',
    });
    this.amountOfAddedProduct.setContent('0');
    this.cardButtonAmount.append(this.amountOfAddedProduct);

    this.plusItem = new BaseComponent('span', { className: 'plus' });
    this.plusItem.setContent('+');
    this.cardButtonAmount.append(this.plusItem);

    this.cardPrice = new BaseComponent('div', { className: 'card__buttons_holder price' });
    this.buttonsHolder.append(this.cardPrice);

    this.cardSum = new BaseComponent('div', { className: 'card__buttons_holder sum' });
    this.cardSum.setContent('0');
    this.cardPrice.append(this.cardSum);

    this.cardCurrency = new BaseComponent('div', {
      className: 'card__buttons_holder currency',
    });
    this.cardCurrency.setContent('$');
    this.cardPrice.append(this.cardCurrency);

    this.cardButtonAddToCart = new BaseComponent('div', {
      className: 'card__buttons_holder button add',
    });
    this.cardButtonAddToCart.setContent('Add to Cart');
    this.buttonsHolder.append(this.cardButtonAddToCart);

    Link.addNavigationLink(this.detailsLink);
  }
}
