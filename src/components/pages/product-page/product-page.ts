import { products } from './../../../data/data';
import { Overlay } from './../../overlay/overlay';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './product-page.scss';
import { TopMenu } from '@/components/top-menu/top-menu';
import { Product } from '@/interfaces/product';

export class ProductPage extends BaseComponent {
  container: Container;
  private overlay: Overlay = new Overlay();
  private topMenu: TopMenu = new TopMenu();
  private smallPic: BaseComponent;
  private productImagePopup: BaseComponent;
  private productPics: BaseComponent;
  private counter = 0;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'product' });

    this.append(this.overlay);

    this.append(this.topMenu);

    this.container = new Container('product__container');
    this.append(this.container);

    const wrapper = new BaseComponent('div', { className: 'wrapper' });
    this.container.append(wrapper);

    const leftBlock = new BaseComponent('div', { className: 'left_block' });
    wrapper.append(leftBlock);

    this.productPics = new BaseComponent('div', { className: 'products_pics' });
    leftBlock.append(this.productPics);

    const productImage = new BaseComponent('div', { className: 'product_image' });
    leftBlock.append(productImage);
    productImage.getNode().addEventListener('click', () => {
      this.toggleClass('overlay');
    });

    const priceHeart = new BaseComponent('div', { className: 'price_heart' });
    leftBlock.append(priceHeart);

    const heart = new BaseComponent('span', { className: 'heart' });
    priceHeart.append(heart);
    heart.getNode().addEventListener('click', () => {
      heart.toggleClass('active');
    });

    const price = new BaseComponent('div', { className: 'price' });
    price.setContent('20');
    priceHeart.append(price);

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

    productImage.getNode().addEventListener('click', () => {
      this.createPopup();
    });

    this.productImagePopup = new BaseComponent('div', { className: 'product_image__popup' });

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

  createPopup() {
    this.productImagePopup = new BaseComponent('div', { className: 'product_image__popup' });
    this.append(this.productImagePopup);
  }
}
