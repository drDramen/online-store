import { CartService } from './../../../services/cart-service';
import { Product } from './../../../interfaces/product';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './cart-page.scss';
import { Overlay } from '@/components/overlay/overlay';
import { NameRoute } from '@/enums/name-route';
import { Router } from '@/router/router';
import { CartItem } from '@/interfaces/cartData';

export class CartPage extends BaseComponent {
  private overlay: Overlay = new Overlay();
  private container: Container;
  private productContainer: BaseComponent<'div'>;
  private finalSumAllProducts: BaseComponent<'div'> = new BaseComponent('div', {
    className: 'final_sum__all_products',
  });

  constructor(private props: Record<string, string>) {
    super('div', { className: 'cart' });

    this.container = new Container('cart__container');
    this.append(this.container);
    this.productContainer = new BaseComponent('div', { className: 'cart__product-container' });
    this.container.append(this.productContainer);
    this.renderCards(CartService.cartData.getValue());

    this.promocodes();

    this.finalSum();

    this.buy();

    CartService.cartData.subscribe(this.renderCards);
    CartService.sumInCart.subscribe(this.updateSum);
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

    this.finalSumAllProducts.setContent(`${CartService.sumInCart.getValue()}$`);
    finalSum.append(this.finalSumAllProducts);

    const removeItem = new BaseComponent('span', { className: 'remove_item' });
    removeItem.getNode().addEventListener('click', () => {
      CartService.removeAllFromCart();
    });
    finalSum.append(removeItem);

    return finalSum;
  }

  createItem(cartItem: { product: Product; count: number }) {
    const { product, count } = cartItem;
    let counter = count;
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
    amountOfAddedProduct.setContent(counter.toString());
    cardButtonAmount.append(amountOfAddedProduct);

    const plusItem = new BaseComponent('span', { className: 'plus' });
    plusItem.setContent('+');
    cardButtonAmount.append(plusItem);

    const quantity = new BaseComponent('div', { className: 'product_quantity' });
    quantity.setContent(`${count * product.price}$`);
    addedItem.append(quantity);

    const removeItem = new BaseComponent('span', { className: 'remove_item' });
    removeItem.getNode().addEventListener('click', () => {
      CartService.removeFromCart(product);
    });

    plusItem.getNode().addEventListener('click', () => {
      if (counter < product.availableAmount) {
        counter++;
        amountOfAddedProduct.setContent(counter.toString());
        quantity.setContent(`${counter * product.price}$`);
        CartService.addToCart(product);
      }
    });

    minusItem.getNode().addEventListener('click', () => {
      if (counter > 0) {
        counter--;
        amountOfAddedProduct.setContent(counter.toString());
        quantity.setContent(`${counter * product.price}$`);
        CartService.decreaseByOne(product);
      }
    });
    addedItem.append(removeItem);

    return addedItem;
  }

  renderCards = (cartData: CartItem[]) => {
    this.productContainer.setInnerHTML('');
    cartData.forEach((item) => {
      const card = this.createItem(item);
      this.productContainer.append(card);
    });
  };

  buyCartPopup() {
    let isCVVValid = false;
    let nameValid = false;
    let phoneValid = false;
    let emailValid = false;
    let delivery = false;
    let card = false;
    let thru = false;

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
          nameSurname.getNode().style.color = 'green';
          nameValid = true;
        } else {
          nameSurnameInput.getNode().style.borderColor = 'red';
          nameSurname.getNode().style.color = 'red';
          nameValid = false;
        }
        isFormValid();
      }
    });

    const phoneHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(phoneHolder);

    const phone = new BaseComponent('span', { className: 'item phone' });
    phone.setContent('Phone (start with +)');
    phoneHolder.append(phone);

    const phoneInput = new BaseComponent('input', { className: 'input' });
    phoneHolder.append(phoneInput);

    phoneInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const valuesArray = value.split('');
        const isValidate = valuesArray.length;
        const regex = /^[a-zA-Z]+$/;
        if (isValidate >= 9 && !value.match(regex) && valuesArray[0] === '+') {
          phoneInput.getNode().style.borderColor = 'green';
          phone.getNode().style.color = 'green';
          phoneValid = true;
        } else {
          phoneInput.getNode().style.borderColor = 'red';
          phone.getNode().style.color = 'red';
          phoneValid = false;
        }
        isFormValid();
      }
    });

    const emailHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(emailHolder);

    const email = new BaseComponent('span', { className: 'item phone' });
    email.setContent('Email');
    emailHolder.append(email);

    const emailInput = new BaseComponent('input', { className: 'input' });
    emailHolder.append(emailInput);

    emailInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(regex)) {
          emailInput.getNode().style.borderColor = 'green';
          email.getNode().style.color = 'green';
          emailValid = true;
        } else {
          emailInput.getNode().style.borderColor = 'red';
          email.getNode().style.color = 'red';
          emailValid = false;
        }
        isFormValid();
      }
    });

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
          deliveryAddress.getNode().style.color = 'green';
          delivery = true;
        } else {
          deliveryAddressInput.getNode().style.borderColor = 'red';
          deliveryAddress.getNode().style.color = 'red';
          delivery = false;
        }
        isFormValid();
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

    cardNumberInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const valuesArray = value.split('');
        const isValidate = valuesArray.length;
        const regex = /^[a-zA-Z]+$/;
        if (value.charAt(0) === '4') {
          paymentSystemOne.getNode().style.backgroundImage =
            '../../../assets/images/payment_systems/visa.png';
          paymentSystemOne.getNode().style.visibility = 'visible';
          paymentSystemTwo.getNode().style.visibility = 'hidden';
          paymentSystemThree.getNode().style.visibility = 'hidden';
          paymentSystemOne.getNode().style.transform = 'translate(100px, 0px)';
        }
        if (valuesArray[0] === '5') {
          paymentSystemTwo.getNode().style.backgroundImage =
            '../../../assets/images/payment_systems/mastercard.png';
          paymentSystemTwo.getNode().style.visibility = 'visible';
          paymentSystemThree.getNode().style.visibility = 'hidden';
          paymentSystemOne.getNode().style.visibility = 'hidden';
        }
        if (
          valuesArray[0] === '0' ||
          valuesArray[0] === '1' ||
          valuesArray[0] === '2' ||
          valuesArray[0] === '3' ||
          valuesArray[0] === '6' ||
          valuesArray[0] === '7' ||
          valuesArray[0] === '8' ||
          valuesArray[0] === '9'
        ) {
          paymentSystemThree.getNode().style.backgroundImage =
            '../../../assets/images/payment_systems/paypal.png';
          paymentSystemThree.getNode().style.visibility = 'visible';
          paymentSystemTwo.getNode().style.visibility = 'hidden';
          paymentSystemOne.getNode().style.visibility = 'hidden';
          paymentSystemThree.getNode().style.transform = 'translate(-100px, 0px)';
        }
        if (isValidate === 16 && !value.match(regex)) {
          cardNumberInput.getNode().style.borderColor = 'green';
          cardNumber.getNode().style.color = 'green';
          card = true;
        } else {
          cardNumberInput.getNode().style.borderColor = 'red';
          cardNumber.getNode().style.color = 'red';
          card = false;
        }
        isFormValid();
      }
    });

    const paymentSystems = new BaseComponent('div', { className: 'payment_systems' });
    buyPopup.append(paymentSystems);

    const paymentSystemOne = new BaseComponent('div', { className: 'payment_system_1' });
    paymentSystems.append(paymentSystemOne);

    const paymentSystemTwo = new BaseComponent('div', { className: 'payment_system_2' });
    paymentSystems.append(paymentSystemTwo);

    const paymentSystemThree = new BaseComponent('div', { className: 'payment_system_3' });
    paymentSystems.append(paymentSystemThree);

    const validThruHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(validThruHolder);

    const validThru = new BaseComponent('span', { className: 'valid_thru' });
    validThru.setContent('Valid Thru');
    validThruHolder.append(validThru);

    const validThruInput = new BaseComponent('input', { maxLength: 4, className: 'input' });
    validThruHolder.append(validThruInput);

    validThruInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const regex = /^[a-zA-Z]+$/;
        const firstNumber = +value.slice(0, 2);
        const secondNumber = +value.slice(-2);
        // if (value.length % 2 === 0) {
        //   value = value + '/';
        // }
        if (!value.match(regex) && value.length === 4 && firstNumber <= 12 && secondNumber <= 31) {
          validThruInput.getNode().style.borderColor = 'green';
          validThru.getNode().style.color = 'green';
          thru = true;
        } else {
          validThruInput.getNode().style.borderColor = 'red';
          validThru.getNode().style.color = 'red';
          thru = false;
        }
        isFormValid();
      }
    });

    const cvvHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(cvvHolder);

    const cvv = new BaseComponent('span', { className: 'cvv' });
    cvv.setContent('CVV');
    cvvHolder.append(cvv);

    const cvvInput = new BaseComponent('input', { maxLength: 3, className: 'input' });
    cvvHolder.append(cvvInput);

    cvvInput.getNode().addEventListener('input', (e) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        const regex = /^[a-zA-Z]+$/;
        const valueToNumber = +value;
        if (value.length === 3 && !value.match(regex) && valueToNumber <= 999) {
          cvvInput.getNode().style.borderColor = 'green';
          cvv.getNode().style.color = 'green';
          isCVVValid = true;
        } else {
          cvvInput.getNode().style.borderColor = 'red';
          cvv.getNode().style.color = 'red';
          isCVVValid = false;
        }
        isFormValid();
      }
    });

    const submitButton = new BaseComponent('button', { className: 'submit_button' });
    submitButton.setContent('Submit');
    buyPopup.append(submitButton);
    submitButton.getNode().disabled = true;

    function isFormValid() {
      const isValid =
        isCVVValid && nameValid && phoneValid && emailValid && delivery && card && thru;
      submitButton.getNode().disabled = !isValid;
    }

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

  updateSum = (value: number) => {
    this.finalSumAllProducts.setContent(`${value}$`);
  };

  destroy() {
    CartService.sumInCart.unsubscribe(this.updateSum);
    CartService.cartData.unsubscribe(this.renderCards);
    super.destroy();
  }
}
