import { CartService } from './../../../services/cart-service';
import { Product } from './../../../interfaces/product';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './cart-page.scss';
import { products } from './../../../data/product-data';

export class CartPage extends BaseComponent {
  private container: Container;
  private counter = 0;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'cart' });

    this.container = new Container('cart__container');
    this.append(this.container);
    this.renderCards(CartService.getDataCart());

    this.finalSum();

    const buyButton = new BaseComponent('div', { className: 'buy_button' });
    buyButton.setContent('Buy');
    this.container.append(buyButton);
  }

  finalSum() {
    const finalSum = new BaseComponent('div', { className: 'final_sum' });
    this.container.append(finalSum);

    const finalSumText = new BaseComponent('div', { className: 'final_sum__text' });
    finalSumText.setContent('Final sum of your purchase');
    finalSum.append(finalSumText);

    const finalSumAllProducts = new BaseComponent('div', { className: 'final_sum__all_products' });
    finalSumAllProducts.setContent('sum here');
    finalSum.append(finalSumAllProducts);

    const removeItem = new BaseComponent('span', { className: 'remove_item' });
    removeItem.getNode().addEventListener('click', () => {
      finalSumAllProducts.setContent('0');
    });
    finalSum.append(removeItem);

    return finalSum;
  }

  createItem(cartItem: { product: Product; count: number }) {
    const { product, count } = cartItem;
    const addedItem = new BaseComponent('div', { className: 'added_item' });
    this.container.append(addedItem);

    const productPic = new BaseComponent('span', { className: 'product_pic' });
    productPic.getNode().style.backgroundImage = `url('${location.origin}/${product.pics[0]}')`;
    addedItem.append(productPic);

    const productBrand = new BaseComponent('div', { className: 'product_brand' });
    productBrand.setContent(`${product.brandName}`);
    addedItem.append(productBrand);

    const productName = new BaseComponent('div', { className: 'product_name' });
    productName.setContent(`${product.productName}`);
    addedItem.append(productName);

    const productPrice = new BaseComponent('div', { className: 'product_price' });
    addedItem.append(productPrice);

    const price = new BaseComponent('div', { className: '_price' });
    price.setContent(`${product.price}$`);
    addedItem.append(price);

    const productCounter = new BaseComponent('div', { className: 'product_counter' });
    addedItem.append(productCounter);

    const cardButtonAmount = new BaseComponent('div', {
      className: 'card__buttons_holder button amount',
    });
    addedItem.append(cardButtonAmount);

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

    minusItem.getNode().addEventListener('click', () => {
      if (this.counter > 0) {
        this.counter--;
        amountOfAddedProduct.setInnerHTML(this.counter.toString());
      }
    });

    const quantity = new BaseComponent('div', { className: 'product_quantity' });
    quantity.setContent(`${count}`);
    addedItem.append(quantity);

    const removeItem = new BaseComponent('span', { className: 'remove_item' });
    removeItem.getNode().addEventListener('click', () => {
      CartService.removeFromCart(product);
      this.renderCards(CartService.getDataCart());
    });
    addedItem.append(removeItem);

    return addedItem;
  }

  renderCards(cartData: { product: Product; count: number }[]) {
    this.container.setInnerHTML('');
    cartData.forEach((item) => {
      const card = this.createItem(item);
      this.container.append(card);
    });
  }
}
