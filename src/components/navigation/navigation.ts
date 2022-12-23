import { BaseComponent } from '@/templates/base-component';
import './navigation.scss';

export class Navigation extends BaseComponent {
  constructor() {
    super('nav', {
      className: 'navigation',
    });

    this.node.innerHTML = `
        <ul class="navigation__items list-reset">
          <li class="navigation__item sum">
            <a class="navigation__link" href="#">Sum</a>
          </li>
          <li class="navigation__item cart">
            <a class="navigation__link" href="#">Cart
              <span class="cart__image"></span>
            </a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link active" href="#">Home</a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#">Shop</a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#">Contacts</a>
          </li>
        </ul>
        `;
  }
}
