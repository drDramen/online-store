import { CartService } from './../../../services/cart-service';
import { Product } from './../../../interfaces/product';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './cart-page.scss';
import { products } from './../../../data/product-data';
import { Overlay } from '@/components/overlay/overlay';
import { NameRoute } from '@/enums/name-route';
import { Router } from '@/router/router';

export class CartPage extends BaseComponent {
  private overlay: Overlay = new Overlay();
  private container: Container;
  private counter = 0;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'cart' });

    this.container = new Container('cart__container');
    this.append(this.container);
    this.renderCards(CartService.getDataCart());

    this.promocodes();

    this.finalSum();

    this.buy();
  }

  buy() {
    const buyButton = new BaseComponent('div', { className: 'buy_button' });
    buyButton.setContent('Buy');
    this.container.append(buyButton);

    buyButton.getNode().addEventListener('click', () => {
      this.buyCartPopup();
    });
  }

  promocodes() {
    const promocodesHolder = new BaseComponent('div', { className: 'promo_holder' });
    this.container.append(promocodesHolder);

    const promoText = new BaseComponent('p', { className: 'promo_holder__text' });
    promoText.setContent('If you wanna discount - we have one time offer');
    promocodesHolder.append(promoText);

    const promoOne = new BaseComponent('p', { className: 'promo_holder__one' });
    promoOne.setContent('Cherry 10%');
    promocodesHolder.append(promoOne);

    const promoTwo = new BaseComponent('p', { className: 'promo_holder__two' });
    promoTwo.setContent('Dramen 20%');
    promocodesHolder.append(promoTwo);

    promoOne.getNode().addEventListener('click', () => {
      promoOne.remove();
      //promoTwo.setAttribute('disabled', 'true');
    });

    promoTwo.getNode().addEventListener('click', () => {
      promoTwo.remove();
    });

    const promoThree = new BaseComponent('p', { className: 'promo_holder__three' });
    promoThree.setContent('Pashabn 30%');
    promocodesHolder.append(promoThree);

    promoThree.getNode().addEventListener('click', () => {
      promoThree.remove();
    });

    const promoFour = new BaseComponent('p', { className: 'promo_holder__four' });
    promoFour.setContent('801 40%');
    promocodesHolder.append(promoFour);

    promoFour.getNode().addEventListener('click', () => {
      promoFour.remove();
    });

    if (!promoOne && !promoTwo && !promoThree && !promoFour) {
      promoText.remove();
    }

    return promocodesHolder;
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

  buyCartPopup() {
    const buyPopup = new BaseComponent('div', { className: 'buy_popup' });
    this.append(buyPopup);

    const cross = new BaseComponent('span', { className: 'cross_line' });
    buyPopup.append(cross);

    const title = new BaseComponent('div', {
      className: 'title',
    });
    title.setContent('Please fill all the required info');
    buyPopup.append(title);

    const nameSurnameHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(nameSurnameHolder);

    const nameSurname = new BaseComponent('span', { className: 'item name' });
    nameSurname.setContent('Name Surname');
    nameSurnameHolder.append(nameSurname);

    const nameSurnameInput = new BaseComponent('input', { className: 'input' });
    nameSurnameHolder.append(nameSurnameInput);

    nameSurnameInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const valuesArray = value.trim().split(' ');
        const isLengthMoreThree = valuesArray.every((word: string) => word.length >= 3);
        const isValidate = valuesArray.length >= 2 && isLengthMoreThree;
        if (isValidate) {
          nameSurnameInput.getNode().style.borderColor = 'green';
        } else {
          nameSurnameInput.getNode().style.borderColor = 'red';
        }
      }
    });

    const phoneHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(phoneHolder);

    const phone = new BaseComponent('span', { className: 'item phone' });
    phone.setContent('Phone');
    phoneHolder.append(phone);

    const phoneInput = new BaseComponent('input', { className: 'input' });
    phoneHolder.append(phoneInput);

    phoneInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const valuesArray = value.split('');
        const isLengthMoreThree = valuesArray.every((word: string) => word.length >= 9);
        const isValidate = valuesArray.length >= 2 && isLengthMoreThree && valuesArray[0] === '+';
        if (isValidate) {
          phoneInput.getNode().style.borderColor = 'green';
        } else {
          phoneInput.getNode().style.borderColor = 'red';
        }
      }
    });

    const emailHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(emailHolder);

    const email = new BaseComponent('span', { className: 'item phone' });
    email.setContent('Email');
    emailHolder.append(email);

    const emailInput = new BaseComponent('input', { className: 'input' });
    emailHolder.append(emailInput);

    const deliveryAddress = new BaseComponent('span', { className: 'title delivery_address' });
    deliveryAddress.setContent('Delivery Address');
    buyPopup.append(deliveryAddress);

    const deliveryAddressInput = new BaseComponent('input', { className: 'input' });
    deliveryAddress.append(deliveryAddressInput);

    deliveryAddressInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const valuesArray = value.trim().split(' ');
        const isLengthMoreThree = valuesArray.every((word: string) => word.length >= 5);
        const isValidate = valuesArray.length >= 3 && isLengthMoreThree;
        if (isValidate) {
          deliveryAddressInput.getNode().style.borderColor = 'green';
        } else {
          deliveryAddressInput.getNode().style.borderColor = 'red';
        }
      }
    });

    const paymentDetails = new BaseComponent('span', { className: 'title payment_details' });
    paymentDetails.setContent('Payment Details');
    buyPopup.append(paymentDetails);

    const cardNumberHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(cardNumberHolder);

    const cardNumber = new BaseComponent('span', { className: 'card_number' });
    cardNumber.setContent('Card Number');
    cardNumberHolder.append(cardNumber);

    const cardNumberInput = new BaseComponent('input', { className: 'input' });
    cardNumberHolder.append(cardNumberInput);

    const paymentSystem = new BaseComponent('div', { className: 'payment_system' });
    buyPopup.append(paymentSystem);

    const validThruHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(validThruHolder);

    const validThru = new BaseComponent('span', { className: 'valid_thru' });
    validThru.setContent('Valid Thru');
    validThruHolder.append(validThru);

    const validThruInput = new BaseComponent('input', { className: 'input' });
    validThruHolder.append(validThruInput);

    const cvvHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(cvvHolder);

    const cvv = new BaseComponent('span', { className: 'cvv' });
    cvv.setContent('CVV');
    cvvHolder.append(cvv);

    const cvvInput = new BaseComponent('input', { className: 'input' });
    cvvHolder.append(cvvInput);

    cvvInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const valuesArray = value.split('');
        const isValidate = valuesArray.length;
        const regex = /^[a-zA-Z]+$/;
        if (isValidate === 3 && !value.match(regex)) {
          cvvInput.getNode().style.borderColor = 'green';
        } else {
          cvvInput.getNode().style.borderColor = 'red';
        }
      }
    });

    const submitButton = new BaseComponent('span', { className: 'submit_button' });
    submitButton.setContent('Submit');
    buyPopup.append(submitButton);

    submitButton.getNode().addEventListener('click', () => {
      this.overlay.remove();
      buyPopup.remove();
      document.body.removeAttribute('style');
      this.thanksForPurchase();
    });

    this.append(this.overlay);
    this.append(buyPopup);
    buyPopup.append(cross);

    this.overlay.addClass('overlay--active');

    this.overlay.getNode().addEventListener('click', () => {
      if (!this.overlay) return;
      else {
        this.overlay.remove();
        buyPopup.remove();
        document.body.removeAttribute('style');
      }
    });

    cross.getNode().addEventListener('click', () => {
      this.overlay.remove();
      buyPopup.remove();
      document.body.removeAttribute('style');
    });

    return buyPopup;
  }

  thanksForPurchase() {
    const thanksPopup = new BaseComponent('div', { className: 'thanks_popup' });
    this.append(thanksPopup);

    const thanksText = new BaseComponent('div', { className: 'thanks_text' });
    thanksPopup.append(thanksText);

    const title = new BaseComponent('div', {
      className: 'title',
    });
    title.setContent('Thanks for the purchase!');
    thanksText.append(title);

    const takeCare = new BaseComponent('div', { className: 'take_care' });
    takeCare.setContent('Take Care');
    thanksText.append(takeCare);

    const hearts = new BaseComponent('span', { className: 'hearts' });
    thanksPopup.append(hearts);

    this.append(this.overlay);
    this.append(thanksPopup);

    this.overlay.addClass('overlay--active');

    setTimeout(() => {
      this.overlay.destroy();
      thanksPopup.destroy();
      window.history.pushState({}, '', NameRoute.Catalog);
      Router.onPathChangeHandler();
    }, 2000);

    return thanksPopup;
  }
}
