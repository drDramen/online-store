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
  private pathToProduct: BaseComponent;
  private productTitle: BaseComponent;
  private productMenu: BaseComponent;
  private selectedMenuInfo: BaseComponent;
  private buttons: BaseComponent;
  private smallPic: BaseComponent;
  private menuDescription: BaseComponent;
  private menuIngredients: BaseComponent;
  private quickBuy: BaseComponent;
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

    this.productTitle = new BaseComponent('div', { className: 'title' });
    this.productTitle.setContent('Brand name Product name');
    this.rightBlock.append(this.productTitle);

    this.pathToProduct = new BaseComponent('div', { className: 'path' });
    this.pathToProduct.setContent('path here like CeraVe > Cleanser > Micellar');
    this.rightBlock.append(this.pathToProduct);

    this.productMenu = new BaseComponent('div', { className: 'menu' });
    this.rightBlock.append(this.productMenu);

    this.menuDescription = new BaseComponent('div', { className: 'menu__description' });
    this.menuDescription.setContent('Description');
    this.productMenu.append(this.menuDescription);

    this.menuIngredients = new BaseComponent('div', { className: 'menu__ingredients' });
    this.menuIngredients.setContent('Ingredients');
    this.productMenu.append(this.menuIngredients);

    this.quickBuy = new BaseComponent('div', { className: 'menu__quick_buy' });
    this.quickBuy.setContent('Quick Buy');
    this.productMenu.append(this.quickBuy);

    this.selectedMenuInfo = new BaseComponent('div', { className: 'selected_menu_info' });
    this.selectedMenuInfo.setContent(`Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and scrambled it
       to make a type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged. It was
         popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus
           PageMaker including versions of Lorem Ipsum.`);
    this.rightBlock.append(this.selectedMenuInfo);

    this.buttons = new BaseComponent('div', { className: 'buttons' });
    this.rightBlock.append(this.buttons);

    this.buttonsHolder = new BaseComponent('div', { className: 'card__buttons_holder' });
    this.rightBlock.append(this.buttonsHolder);

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

    this.smallPic = new BaseComponent('div', { className: 'small_pic' });
  }

  createSmallPics() {
    for (let i = 0; i <= 4; i++) {
      this.productPics.append(this.smallPic);
    }
  }
}
