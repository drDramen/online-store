import { Product } from '@/interfaces/product';
import { BaseComponent } from '@/templates/base-component';

export class ProductPageCard extends BaseComponent {
  private productImage: BaseComponent;
  private counter = 0;

  constructor(private data: Product) {
    super('div', { className: 'wrapper' });
    this.productImage = new BaseComponent('div', { className: 'product_image' });
    this.productImage.getNode().style.backgroundImage = `url('${location.origin}/${data.pics[0]}')`;
    this.renderCard(data);
  }

  loadSmallPics(pics: Product['pics']) {
    return pics.map((pic) => {
      const smallPic = new BaseComponent('div', { className: 'small_pic' });
      smallPic.getNode().style.backgroundImage = `url('${location.origin}/${pic}')`;

      smallPic.getNode().addEventListener('click', () => {
        this.productImage.getNode().style.backgroundImage = `url('${location.origin}/${pic}')`;
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
    this.productImage.getNode().addEventListener('click', () => {
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
    price.setContent(`${data.price}$`);
    priceHeart.append(price);

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
    buttonsHolder.append(cardButtonAddToCart);

    const smallPics = this.loadSmallPics(data.pics);
    productPics.append(...smallPics);
  }
}
