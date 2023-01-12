import { CartService } from './../../../services/cart-service';
import { ModalProductImage } from './../../modal-product-image/modal-product-image';
import { Product } from '@/interfaces/product';
import { BaseComponent } from '@/templates/base-component';
import { Link } from './../../../templates/link';
import './product-page.scss';
import { NameRoute } from '@/enums/name-route';
import { Overlay } from '@/components/overlay/overlay';

export class ProductPageCard extends BaseComponent {
  private overlay: Overlay = new Overlay();
  private productImage: ModalProductImage;
  private counter = 0;

  constructor(private data: Product) {
    super('div', { className: 'wrapper' });
    this.productImage = new ModalProductImage(data.pics[0], (src) => {
      this.createImagePopup(src);
    });
    this.renderCard(data);
    this.productImage.getNode().addEventListener('mouseover', () => {
      const tooltip = new BaseComponent('div', { className: 'tooltip' });
      tooltip.setContent('Click on me');
    });
  }

  loadSmallPics(pics: Product['pics']) {
    return pics.map((pic) => {
      const smallPic = new BaseComponent('div', { className: 'small_pic' });
      smallPic.getNode().style.backgroundImage = `url('${location.origin}/${pic}')`;

      smallPic.getNode().addEventListener('click', () => {
        this.productImage.setSRC(pic);
      });
      return smallPic;
    });
  }

  renderCard(data: Product) {
    const leftBlock = new BaseComponent('div', { className: 'left_block' });
    this.append(leftBlock);

    const productPics = new BaseComponent('div', { className: 'products_pics' });

    leftBlock.append(productPics);

    leftBlock.append(this.productImage);

    const priceHeart = new BaseComponent('div', { className: 'price_heart' });
    leftBlock.append(priceHeart);

    const heart = new BaseComponent('span', { className: 'heart' });
    priceHeart.append(heart);
    heart.getNode().addEventListener('click', () => {
      heart.toggleClass('active');
    });

    const rightBlock = new BaseComponent('div', { className: 'right_block' });
    this.append(rightBlock);

    const productTitle = new BaseComponent('div', { className: 'title' });
    productTitle.setContent(`${data.brandName} ${data.productName}`);
    rightBlock.append(productTitle);

    const pathToProduct = new BaseComponent('div', { className: 'path' });
    pathToProduct.setContent(` ${data.category} > ${data.brandName} > ${data.for}`);
    rightBlock.append(pathToProduct);

    const productMenu = new BaseComponent('div', { className: 'menu' });
    rightBlock.append(productMenu);

    const menuDescription = new BaseComponent('div', { className: 'menu__description' });
    menuDescription.setContent('Description');
    productMenu.append(menuDescription);

    const menuIngredients = new BaseComponent('div', { className: 'menu__ingredients' });
    menuIngredients.setContent('Ingredients');
    productMenu.append(menuIngredients);

    const quickBuy = new BaseComponent('div', { className: 'menu__quick_buy' });
    quickBuy.setContent('Quick Buy');
    productMenu.append(quickBuy);

    const selectedMenuInfo = new BaseComponent('div', { className: 'selected_menu_info' });
    selectedMenuInfo.setContent(`${data.description}`);
    rightBlock.append(selectedMenuInfo);

    const buttons = new BaseComponent('div', { className: 'buttons' });
    rightBlock.append(buttons);

    const buttonsHolder = new BaseComponent('div', { className: 'card__buttons_holder' });
    rightBlock.append(buttonsHolder);

    const price = new BaseComponent('div', { className: 'price' });
    price.setContent(`${data.price}$`);
    buttonsHolder.append(price);

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
    amountOfAddedProduct.setInnerHTML('0');
    cardButtonAmount.append(amountOfAddedProduct);

    const plusItem = new BaseComponent('span', { className: 'plus' });
    plusItem.setContent('+');
    cardButtonAmount.append(plusItem);

    plusItem.getNode().addEventListener('click', () => {
      if (this.counter < this.data.availableAmount) {
        this.counter++;
        amountOfAddedProduct.setInnerHTML(this.counter.toString());
      }
    });

    minusItem.getNode().addEventListener('click', () => {
      if (this.counter > 0) {
        this.counter--;
        amountOfAddedProduct.setInnerHTML(this.counter.toString());
      }
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
    cardButtonAddToCart.getNode().addEventListener('click', () => {
      CartService.addToCart(this.data);
      this.createAddToCartPopup();
      cardButtonAddToCart.toggleClass('active');
      cardButtonAddToCart.setContent('Remove');
      amountOfAddedProduct.setInnerHTML('1');
    });
    buttonsHolder.append(cardButtonAddToCart);

    const smallPics = this.loadSmallPics(data.pics);
    productPics.append(...smallPics);
  }

  createImagePopup(src: string) {
    const wrapperImage = new BaseComponent('div', { className: 'wrapper_image' });
    this.append(wrapperImage);
    const productImagePopup = new BaseComponent<'img'>('img', {
      className: 'product_image__popup',
    });
    this.append(this.overlay);
    productImagePopup.getNode<HTMLImageElement>().src = `${location.origin}/${src}`;
    this.append(productImagePopup);
    const cross = new BaseComponent('span', { className: 'cross_line' });
    wrapperImage.append(productImagePopup);
    wrapperImage.append(cross);
    this.overlay.addClass('overlay--active');

    this.overlay.getNode().addEventListener('click', () => {
      if (!this.overlay) return;
      else {
        this.overlay.remove();
        wrapperImage.remove();
        document.body.removeAttribute('style');
      }
    });

    cross.getNode().addEventListener('click', () => {
      this.overlay.remove();
      wrapperImage.remove();
      document.body.removeAttribute('style');
    });

    return productImagePopup;
  }

  createAddToCartPopup() {
    const addToCartPopup = new BaseComponent('div', { className: 'add_to_card__popup' });
    const itemAdded = new BaseComponent('div', { className: 'item_added' });
    itemAdded.setContent('Item is added to Cart');
    addToCartPopup.append(itemAdded);
    const cross = new BaseComponent('span', { className: 'cross_line' });
    const continueShoppingLink = new Link({
      href: NameRoute.Catalog,
      className: 'continue_shopping_link',
    });
    addToCartPopup.append(continueShoppingLink);
    const continueShopping = new BaseComponent('div', { className: 'add_to_card__button' });
    continueShopping.setContent('Continue Shopping');
    continueShoppingLink.append(continueShopping);
    const goToCartLink = new Link({ href: NameRoute.Cart, className: 'go_to_cart_link' });
    addToCartPopup.append(goToCartLink);
    const goToCart = new BaseComponent('div', { className: 'add_to_card__button' });
    goToCart.setContent('Go to Cart');
    goToCartLink.append(goToCart);
    this.append(this.overlay);
    this.append(addToCartPopup);
    addToCartPopup.append(cross);
    this.overlay.addClass('overlay--active');

    this.overlay.getNode().addEventListener('click', () => {
      if (!this.overlay) return;
      else {
        this.overlay.remove();
        addToCartPopup.remove();
        document.body.removeAttribute('style');
      }
    });

    cross.getNode().addEventListener('click', () => {
      this.overlay.remove();
      addToCartPopup.remove();
      document.body.removeAttribute('style');
    });

    continueShopping.getNode().addEventListener('click', () => {
      this.overlay.remove();
      addToCartPopup.remove();
      document.body.removeAttribute('style');
    });

    return addToCartPopup;
  }
}
