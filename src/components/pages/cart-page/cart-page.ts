import { CartService } from './../../../services/cart-service';
import { Product } from './../../../interfaces/product';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './cart-page.scss';
//import { products } from './../../../data/product-data';

export class CartPage extends BaseComponent {
  private container: Container;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'cart' });

    this.container = new Container('cart__container');
    this.append(this.container);
    this.renderCards(CartService.getDataCart());

    const buyButton = new BaseComponent('div', { className: 'buy_button' });
    this.container.append(buyButton);
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

    const quantity = new BaseComponent('div', { className: 'product_quantity' });
    quantity.setContent(`${count}$`);
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
