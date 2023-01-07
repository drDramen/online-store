import { Overlay } from './../../overlay/overlay';
import { products } from './../../../data/data';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './product-page.scss';
import { TopMenu } from '@/components/top-menu/top-menu';
import { Product } from '@/interfaces/product';

export class ProductPage extends BaseComponent {
  container: Container;
  private topMenu: TopMenu = new TopMenu();
  private smallPic: BaseComponent;
  private productPics: BaseComponent;
  private productImage: BaseComponent;
  private overlay: Overlay = new Overlay();
  private productImagePopup: BaseComponent;
  private counter = 0;
  private cross: BaseComponent;
  private addToCartPopup: BaseComponent;
  private body = document.querySelectorAll('.page__body');

  constructor() {
    super('div', { className: 'product' });

    this.append(this.topMenu);

    this.container = new Container('product__container');
    this.append(this.container);

    const wrapper = new BaseComponent('div', { className: 'wrapper' });
    this.container.append(wrapper);

    const leftBlock = new BaseComponent('div', { className: 'left_block' });
    wrapper.append(leftBlock);

    this.productPics = new BaseComponent('div', { className: 'products_pics' });
    leftBlock.append(this.productPics);

    this.productImage = new BaseComponent('div', { className: 'product_image' });
    leftBlock.append(this.productImage);

    const createImage = (image: Product) => {
      this.productImage.getNode().style.backgroundImage = image.pics[0];
      return this.productImage;
    };

    const priceHeart = new BaseComponent('div', { className: 'price_heart' });
    leftBlock.append(priceHeart);

    const heart = new BaseComponent('span', { className: 'heart' });
    priceHeart.append(heart);
    heart.getNode().addEventListener('click', () => {
      heart.toggleClass('active');
    });

    const rightBlock = new BaseComponent('div', { className: 'right_block' });
    wrapper.append(rightBlock);

    const productTitle = new BaseComponent('div', { className: 'title' });
    productTitle.setContent('Brand name Product name');
    rightBlock.append(productTitle);

    const pathToProduct = new BaseComponent('div', { className: 'path' });
    pathToProduct.setContent('path here like CeraVe > Cleanser > Micellar');
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
    selectedMenuInfo.setContent(`Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and scrambled it
       to make a type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged. It was
         popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus
           PageMaker including versions of Lorem Ipsum.`);
    rightBlock.append(selectedMenuInfo);

    const buttons = new BaseComponent('div', { className: 'buttons' });
    rightBlock.append(buttons);

    const buttonsHolder = new BaseComponent('div', { className: 'card__buttons_holder' });
    rightBlock.append(buttonsHolder);

    const price = new BaseComponent('div', { className: 'price' });
    price.setContent('20$');
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
      const temp = products.find((element) => element.id === '0220');
      if (temp) {
        if (temp && this.counter < temp.availableAmount) {
          this.counter++;
          amountOfAddedProduct.setInnerHTML(this.counter.toString());
        }
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
    buttonsHolder.append(cardButtonAddToCart);

    // this.productImage.getNode().addEventListener('click', () => {
    //   this.createImagePopup();
    // });

    this.productImagePopup = new BaseComponent('div', { className: 'product_image__popup' });
    this.cross = new BaseComponent('span', { className: 'cross_line' });

    products.map((item) => {
      const image = createImage(item);
      image.getNode().addEventListener('click', () => {
        this.createImagePopup(item);
      });
    });

    this.addToCartPopup = new BaseComponent('div', { className: 'add_to_card__popup' });
    const itemAdded = new BaseComponent('div', { className: 'item_added' });
    itemAdded.setContent('Item is added to Cart');
    this.addToCartPopup.append(itemAdded);
    const continueShopping = new BaseComponent('div', { className: 'add_to_card__button' });
    continueShopping.setContent('Continue Shopping');
    this.addToCartPopup.append(continueShopping);
    const goToCart = new BaseComponent('div', { className: 'add_to_card__button' });
    goToCart.setContent('Go to Cart');
    this.addToCartPopup.append(goToCart);
    cardButtonAddToCart.getNode().addEventListener('click', () => {
      this.createAddToCartPopup();
    });

    this.smallPic = new BaseComponent('div', { className: 'small_pic' });

    this.loadSmallPics([
      'public/product-images/0220/yttp-superfood-cleanser-1.avif',
      'public/product-images/0220/yttp-superfood-cleanser-2.avif',
      'public/product-images/0220/yttp-superfood-cleanser-3.avif',
      'public/product-images/0220/yttp-superfood-cleanser-4.avif',
    ]);
  }

  loadSmallPics(pics: Product['pics']) {
    for (let i = 0; i < pics.length; i++) {
      this.smallPic = new BaseComponent('div', { className: 'small_pic' });
      this.smallPic.getNode().style.backgroundImage = `url(${pics[i]})`;
      this.productPics.append(this.smallPic);
    }
  }

  createImagePopup(image: Product) {
    this.append(this.overlay);
    this.append(this.productImagePopup);
    this.productImagePopup.getNode().style.backgroundImage = image.pics[0];
    this.productImagePopup.append(this.cross);
    this.overlay.addClass('overlay--active');

    this.overlay.getNode().addEventListener('click', () => {
      if (!this.overlay) return;
      else {
        this.overlay.remove();
        this.productImagePopup.remove();
        document.body.removeAttribute('style');
      }
    });

    this.cross.getNode().addEventListener('click', () => {
      this.overlay.remove();
      this.productImagePopup.remove();
      document.body.removeAttribute('style');
    });

    return this.productImagePopup;
  }

  createAddToCartPopup() {
    this.append(this.overlay);
    this.append(this.addToCartPopup);
    this.addToCartPopup.append(this.cross);
    this.overlay.addClass('overlay--active');

    this.overlay.getNode().addEventListener('click', () => {
      if (!this.overlay) return;
      else {
        this.overlay.remove();
        this.addToCartPopup.remove();
        document.body.removeAttribute('style');
      }
    });

    this.cross.getNode().addEventListener('click', () => {
      this.overlay.remove();
      this.addToCartPopup.remove();
      document.body.removeAttribute('style');
    });

    return this.addToCartPopup;
  }
}
