import { BaseComponent } from '@/templates/base-component';
import { Link } from '@/templates/link';
import { Container } from '@/components/container/container';
import './home-page.scss';
import image from '../../../assets/images/flask-home-page.png';
import sprite from '../../../assets/images/home_page_icons/sprite.svg';

export class HomePage extends BaseComponent {
  private shopNowButton: Link;
  private container: Container;
  private content: BaseComponent;
  private imageWrapper: BaseComponent;
  private advantages: BaseComponent;

  constructor(private props: Record<string, string>) {
    super('section', {
      className: 'home-page',
    });

    this.container = new Container('home-page__container');
    this.content = new BaseComponent('div', {
      className: 'home-page__content',
      innerHTML: `
      <h2 class="home-page__title">Health and Beauty of your Skin Lives Here</h2>
      <p class="home-page__moto">Take it Home :)</p>
      <p class="home-page__description">Explore the best from Cosmetics World of SkinCare products presented by the Brands we Carefully picked for You</p>`,
    });
    this.imageWrapper = new BaseComponent('div', {
      className: 'home-page__image-wrapper',
      innerHTML: `<img class="home-page__image" src="${image}" alt="TakeCare">`,
    });

    this.advantages = new BaseComponent('div', { className: 'home-page__advantages advantages' });
    this.shopNowButton = new Link({
      href: '/catalog',
      className: 'home-page__button',
      textContent: 'Shop Now',
    });

    this.content.append(this.shopNowButton);
    this.fillAdvantages();
    this.container.append(this.content, this.imageWrapper, this.advantages);
    this.append(this.container);
  }

  fillAdvantages() {
    this.advantages.setInnerHTML(`
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
          <span class='icon icon-sputnik'></span>
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
    `);
  }
}
