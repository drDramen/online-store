import { BaseComponent } from '@/templates/base-component';
import { Container } from '@/components/container/container';
import './home-page.scss';
import image from '../../../assets/images/flask-home-page.png';
import sprite from '../../../assets/images/home_page_icons/sprite.svg';

export class HomePage extends BaseComponent {
  private shopNowButton: BaseComponent;
  private container: Container;

  constructor() {
    super('section', {
      className: 'home-page',
    });

    this.container = new Container('home-page__container');
    this.shopNowButton = new BaseComponent('a', {
      className: 'home-page__button',
      textContent: 'Shop Now',
    });
    this.shopNowButton.setAttribute('href', '/catalog');
    this.append(this.container);

    this.container.setInnerHTML(`
    <div class="home-page__content">
      <h2 class="home-page__title">Health and Beauty of your Skin Lives Here</h2>
      <p class="home-page__moto">Take it Home :)</p>
      <p class="home-page__description">Explore the best from Cosmetics World of SkinCare products presented by the Brands we Carefully picked for You</p>
      ${this.shopNowButton.getNode().outerHTML}
    </div>
    <div class="home-page__image-wrapper">
      <img class="home-page__image" src="${image}" alt="TakeCare">
    </div>
    <div class="home-page__advantages advantages">
      <figure class="advantages__item">
        <div class="icon-wrapper">
          <svg class="icon icon-flask-science">
            <use href="${sprite}#flask-science"></use>
          </svg>
        </div>
        <figcaption class="advantages__description">science-based recipes and ingredients</figcaption>
      </figure>
      <figure class="advantages__item">
        <div class="icon-wrapper">
          <svg class="icon icon-planet">
            <use href="${sprite}#planet"></use>
          </svg>
        </div>
        <figcaption class="advantages__description">best brands from all over the world</figcaption>
      </figure>
      <figure class="advantages__item">
        <div class="icon-wrapper">
          <svg class="icon icon-package">
            <use href="${sprite}#package"></use>
          </svg>
        </div>
        <figcaption class="advantages__description">testers and gifts with every purchase</figcaption>
      </figure>
    </div>
    `);
  }
}
