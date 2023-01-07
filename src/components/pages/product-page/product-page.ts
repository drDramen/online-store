import { ModalProductImage } from './../../modal-product-image/modal-product-image';
import { NameRoute } from './../../../enums/name-route';
import { Link } from './../../../templates/link';
import { Overlay } from './../../overlay/overlay';
import { products } from './../../../data/data';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './product-page.scss';
import { TopMenu } from '@/components/top-menu/top-menu';
import { Product } from '@/interfaces/product';
import { ProductService } from '@/services/product-services';
import { ProductPageCard } from './product-page-card';

const continueShoppingLink = { href: NameRoute.Catalog };
const goToCartLink = { href: NameRoute.Cart };

export class ProductPage extends BaseComponent {
  container: Container;
  private topMenu: TopMenu = new TopMenu();
  private overlay: Overlay = new Overlay();
  private counter = 0;
  private cross: BaseComponent;
  private addToCartPopup: BaseComponent;
  private continueShopping: BaseComponent;
  private continueShoppingLink: Link;
  private goToCartLink: Link;
  // private productImagePopup: BaseComponent;
  private content: BaseComponent;
  data: Product | undefined;

  constructor({ id }: Record<string, string>) {
    super('div', { className: 'product' });

    this.append(this.topMenu);
    this.data = ProductService.getProduct(id);

    this.container = new Container('product__container');

    this.cross = new BaseComponent('span', { className: 'cross_line' });

    products.map((item) => {
      const image = new ModalProductImage(item.pics[0], (src) => {
        this.createImagePopup(src);
      });
    });

    this.addToCartPopup = new BaseComponent('div', { className: 'add_to_card__popup' });
    const itemAdded = new BaseComponent('div', { className: 'item_added' });
    itemAdded.setContent('Item is added to Cart');
    this.addToCartPopup.append(itemAdded);
    this.continueShoppingLink = new Link({
      ...continueShoppingLink,
      className: 'continue_shopping_link',
    });
    this.addToCartPopup.append(this.continueShoppingLink);
    this.continueShopping = new BaseComponent('div', { className: 'add_to_card__button' });
    this.continueShopping.setContent('Continue Shopping');
    this.continueShoppingLink.append(this.continueShopping);
    this.goToCartLink = new Link({ ...goToCartLink, className: 'go_to_cart_link' });
    this.addToCartPopup.append(this.goToCartLink);
    const goToCart = new BaseComponent('div', { className: 'add_to_card__button' });
    goToCart.setContent('Go to Cart');
    this.goToCartLink.append(goToCart);
    // cardButtonAddToCart.getNode().addEventListener('click', () => {
    //   this.createAddToCartPopup();
    // });

    Link.addNavigationLink(this.continueShoppingLink);
    Link.addNavigationLink(this.goToCartLink);

    if (this.data) {
      this.content = new ProductPageCard(this.data);
    } else {
      this.content = new BaseComponent('div', {
        className: 'product__not-found',
        textContent: 'Not found',
      });
    }
    this.container.append(this.content);
    this.append(this.topMenu);
    this.append(this.container);
    this.append(this.overlay);
  }

  createImagePopup(src: string) {
    const productImagePopup = new BaseComponent<'img'>('img', {
      className: 'product_image__popup',
    });
    this.append(this.overlay);
    productImagePopup.getNode<HTMLImageElement>().src = src;
    this.append(productImagePopup);
    productImagePopup.append(this.cross);
    this.overlay.addClass('overlay--active');

    this.overlay.getNode().addEventListener('click', () => {
      if (!this.overlay) return;
      else {
        this.overlay.remove();
        productImagePopup.remove();
        document.body.removeAttribute('style');
      }
    });

    this.cross.getNode().addEventListener('click', () => {
      this.overlay.remove();
      productImagePopup.remove();
      document.body.removeAttribute('style');
    });

    return productImagePopup;
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

    this.continueShopping.getNode().addEventListener('click', () => {
      this.overlay.remove();
      this.addToCartPopup.remove();
      document.body.removeAttribute('style');
    });

    return this.addToCartPopup;
  }
}
