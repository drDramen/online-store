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
  private cardButtonPrice: BaseComponent;
  private cardButtonCurrency: BaseComponent;

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

    this.cardButtonAmount = new BaseComponent('div', { className: 'card__buttons_holder button' });
    this.buttonsHolder.append(this.cardButtonAmount);

    this.cardButtonPrice = new BaseComponent('div', { className: 'card__buttons_holder price' });
    this.cardButtonPrice.setContent('0');
    this.buttonsHolder.append(this.cardButtonPrice);

    this.cardButtonCurrency = new BaseComponent('div', {
      className: 'card__buttons_holder currency',
    });
    this.cardButtonCurrency.setContent('$');
    this.buttonsHolder.append(this.cardButtonCurrency);

    this.cardButtonAddToCart = new BaseComponent('div', {
      className: 'card__buttons_holder button',
    });
    this.buttonsHolder.append(this.cardButtonAddToCart);

    Link.addNavigationLink(this.detailsLink);
  }
}
