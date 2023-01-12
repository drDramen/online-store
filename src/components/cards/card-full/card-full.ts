import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './card-full.scss';
import { Product } from '@/interfaces/product';
import { CartService } from '@/services/cart-service';

export class CardFull extends BaseComponent {
  private heartToCart: BaseComponent;
  private detailsLink: Link;
  private counter =
    CartService.cartData.getValue().find((item) => item.product.id === this.data.id)?.count ?? 0;
  cardButtonAddToCart: BaseComponent<'div'>;
  amountOfAddedProduct: BaseComponent<'span'>;
  cardPrice: BaseComponent<'div'>;

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
    productPrice.setContent(`${this.data.price}$`);
    productPriceHolder.append(productPrice);

    this.heartToCart = new BaseComponent('span', { className: 'card__heart' });
    heartPrice.append(this.heartToCart);
    this.heartToCart.getNode().addEventListener('click', () => {
      this.heartToCart.toggleClass('active');
    });

    const productImage = new BaseComponent('span', { className: 'card__product_image' });
    productImage.getNode().style.backgroundImage = `url('${location.origin}/${this.data.pics[0]}')`;
    cardFrame.append(productImage);

    this.detailsLink = new Link({
      href: NameRoute.Product.replace(':id', this.data.id),
      className: 'details_link',
    });
    cardFrame.append(this.detailsLink);

    const productDetails = new BaseComponent('span', { className: 'card__details' });
    productDetails.setContent('Details');
    this.detailsLink.append(productDetails);

    const cardTitle = new BaseComponent('div', { className: 'card__title' });
    this.append(cardTitle);

    const brandName = new BaseComponent('div', { className: 'card__title brand_name' });
    brandName.setContent(`${this.data.brandName}`);
    cardTitle.append(brandName);

    const productName = new BaseComponent('div', { className: 'card__title product_name' });
    productName.setContent(`${this.data.productName}`);
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

    this.amountOfAddedProduct.setContent(`${this.counter}`);
    cardButtonAmount.append(this.amountOfAddedProduct);

    const plusItem = new BaseComponent('span', { className: 'plus' });
    plusItem.setContent('+');
    cardButtonAmount.append(plusItem);

    plusItem.getNode().addEventListener('click', () => {
      if (this.counter < this.data.availableAmount) {
        if (this.counter === 0) {
          this.cardButtonAddToCart.setContent('Remove');
        }
        this.counter++;
        this.amountOfAddedProduct.setInnerHTML(this.counter.toString());
        this.cardPrice.setContent(`${this.counter * this.data.price}$`);
        CartService.addToCart(this.data);
      }
    });

    minusItem.getNode().addEventListener('click', () => {
      if (this.counter > 0) {
        if (this.counter === 1) {
          this.cardButtonAddToCart.setContent('Add to Cart');
        }
        this.counter--;
        this.amountOfAddedProduct.setInnerHTML(this.counter.toString());
        this.cardPrice.setContent(`${this.counter * this.data.price}$`);
        CartService.decreaseByOne(this.data);
      }
    });

    this.cardPrice = new BaseComponent('div', { className: 'card__buttons_holder sum' });
    this.cardPrice.setContent(`${this.counter * this.data.price}$`);
    buttonsHolder.append(this.cardPrice);

    this.cardButtonAddToCart = new BaseComponent('div', {
      className: 'card__buttons_holder button add',
    });
    this.cardButtonAddToCart.setContent(`${this.counter ? 'Remove' : 'Add to Cart'}`);
    this.cardButtonAddToCart
      .getNode()
      .addEventListener('click', this.setCartButtonListener.bind(this));

    buttonsHolder.append(this.cardButtonAddToCart);
  }

  setCartButtonListener() {
    if (this.counter > 0) {
      this.counter = 0;
      CartService.removeFromCart(this.data);
      this.cardButtonAddToCart.setContent('Add to Cart');
    } else {
      this.counter += 1;
      CartService.addToCart(this.data);
      this.cardButtonAddToCart.setContent('Remove');
    }

    this.amountOfAddedProduct.setContent(`${this.counter}`);
    this.cardPrice.setContent(`${this.counter * this.data.price}$`);
  }

  changeCardView() {
    this.toggleClass('card--active');
  }
}
