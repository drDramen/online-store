import { CartService } from './../../../services/cart-service';
import { Product } from './../../../interfaces/product';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './cart-page.scss';
import { products } from './../../../data/product-data';
import { Overlay } from '@/components/overlay/overlay';

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

    const brandNameProductName = new BaseComponent('div', {
      className: 'title brand_product_name',
    });
    brandNameProductName.setContent('Brand Name Product Name');
    buyPopup.append(brandNameProductName);

    const nameHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(nameHolder);

    const name = new BaseComponent('span', { className: 'item name' });
    name.setContent('Name');
    nameHolder.append(name);

    const nameInput = new BaseComponent('input', { className: 'input' });
    nameHolder.append(nameInput);

    const surnameHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(surnameHolder);

    const surname = new BaseComponent('span', { className: 'item surname' });
    surname.setContent('Surname');
    surnameHolder.append(surname);

    const surnameInput = new BaseComponent('input', { className: 'input' });
    surnameHolder.append(surnameInput);

    const phoneHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(phoneHolder);

    const phone = new BaseComponent('span', { className: 'item phone' });
    phone.setContent('Phone');
    phoneHolder.append(phone);

    const phoneInput = new BaseComponent('input', { className: 'input' });
    phoneHolder.append(phoneInput);

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

    const cityHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(cityHolder);

    const city = new BaseComponent('span', { className: 'item city' });
    city.setContent('City');
    cityHolder.append(city);

    const cityInput = new BaseComponent('input', { className: 'input' });
    cityHolder.append(cityInput);

    const streetHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(streetHolder);

    const street = new BaseComponent('span', { className: 'item street' });
    street.setContent('Street');
    streetHolder.append(street);

    const streetInput = new BaseComponent('input', { className: 'input' });
    streetHolder.append(streetInput);

    const houseHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(houseHolder);

    const house = new BaseComponent('span', { className: 'item house' });
    house.setContent('House');
    houseHolder.append(house);

    const houseInput = new BaseComponent('input', { className: 'input' });
    houseHolder.append(houseInput);

    const apartmentHolder = new BaseComponent('div', { className: 'holder' });
    buyPopup.append(apartmentHolder);

    const apartment = new BaseComponent('span', { className: 'item apartment' });
    apartment.setContent('Apartment');
    apartmentHolder.append(apartment);

    const apartmentInput = new BaseComponent('input', { className: 'input' });
    apartmentHolder.append(apartmentInput);

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

    const submitButton = new BaseComponent('span', { className: 'submit_button' });
    submitButton.setContent('Submit');
    buyPopup.append(submitButton);

    this.append(buyPopup);
    buyPopup.append(cross);
    this.append(this.overlay);

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
}
