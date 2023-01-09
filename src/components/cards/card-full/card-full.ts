import { products } from './../../../data/data';
import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './card-full.scss';
import { Product } from '@/interfaces/product';

export class CardFull extends BaseComponent {
  private heartToCart: BaseComponent;
  private detailsLink: Link;
  private card: BaseComponent;
  private counter = 0;

  constructor(private data: Product) {
    super('div', {
      className: 'card',
    });

    this.card = new BaseComponent('div', { className: 'card' });
    this.append(this.card);

    const cardFrame = new BaseComponent('div', { className: 'card__frame' });
    this.card.append(cardFrame);

    const heartPrice = new BaseComponent('div', { className: 'card__product_price_heart' });
    cardFrame.append(heartPrice);

    const productPriceHolder = new BaseComponent('div', {
      className: 'card__product_price_holder',
    });
    heartPrice.append(productPriceHolder);

    const productPrice = new BaseComponent('span', { className: 'card__product_price' });
    productPrice.setContent('20');
    productPriceHolder.append(productPrice);

    const productCurrency = new BaseComponent('span', { className: 'card__product_currency' });
    productCurrency.setContent('$');
    productPriceHolder.append(productCurrency);

    this.heartToCart = new BaseComponent('span', { className: 'card__heart' });
    heartPrice.append(this.heartToCart);
    this.heartToCart.getNode().addEventListener('click', () => {
      this.heartToCart.toggleClass('active');
    });

    const productImage = new BaseComponent('span', { className: 'card__product_image' });
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
    this.card.append(cardTitle);

    const brandName = new BaseComponent('div', { className: 'card__title brand_name' });
    brandName.setContent('brand name');
    cardTitle.append(brandName);

    const productName = new BaseComponent('div', { className: 'card__title product_name' });
    productName.setContent('product name');
    cardTitle.append(productName);

    const buttonsHolder = new BaseComponent('div', { className: 'card__buttons_holder' });
    this.card.append(buttonsHolder);

    const cardButtonAmount = new BaseComponent('div', {
      className: 'card__buttons_holder button amount',
    });
    buttonsHolder.append(cardButtonAmount);

    const minusItem = new BaseComponent('span', { className: 'minus' });
    minusItem.setContent('-');
    cardButtonAmount.append(minusItem);

    const amountOfAddedProduct = new BaseComponent('span', {
      className: 'added_number',
    });
    amountOfAddedProduct.setContent('0');
    cardButtonAmount.append(amountOfAddedProduct);

    const plusItem = new BaseComponent('span', { className: 'plus' });
    plusItem.setContent('+');
    cardButtonAmount.append(plusItem);

    plusItem.getNode().addEventListener('click', () => {
      const temp = products.find((element) => element.id === '0220');
      if (temp) {
        if (temp && this.counter < temp.availableAmount) {
          this.counter++;
          amountOfAddedProduct.setInnerHTML(this.counter.toString());
        }
      }
    });

    minusItem.getNode().addEventListener('click', (e) => {
      if (this.counter > 0) {
        this.counter--;
        amountOfAddedProduct.setInnerHTML(this.counter.toString());
      }
      minusItem.removeAttribute('click');
      e.stopPropagation();
      e.preventDefault();
      minusItem.removeClass('hover');
    });

    const cardPrice = new BaseComponent('div', { className: 'card__buttons_holder price' });
    buttonsHolder.append(cardPrice);

    const cardSum = new BaseComponent('div', { className: 'card__buttons_holder sum' });
    cardSum.setContent('0');
    cardPrice.append(cardSum);

    const cardCurrency = new BaseComponent('div', {
      className: 'card__buttons_holder currency',
    });
    cardCurrency.setContent('$');
    cardPrice.append(cardCurrency);

    const cardButtonAddToCart = new BaseComponent('div', {
      className: 'card__buttons_holder button add',
    });
    cardButtonAddToCart.setContent('Add to Cart');
    buttonsHolder.append(cardButtonAddToCart);

    Link.addNavigationLink(this.detailsLink);
  }

  changeCardView() {
    this.card.toggleClass('card--active');
  }
}
