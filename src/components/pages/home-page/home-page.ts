import { NameRoute } from '@/enums/name-route';
import { BaseComponent } from '@/templates/base-component';
import { Link } from '@/templates/link';
import { Container } from '@/components/container/container';
import './home-page.scss';
import image from '../../../assets/images/flask-home-page.png';
import sprite from '../../../assets/images/sprite.svg';

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
      <h1 class="home-page__title">Health and Beauty of your Skin Lives Here</h1>
      <p class="home-page__moto">Take it Home :)</p>
      <p class="home-page__description">Explore the best from Cosmetics World of SkinCare products presented by the Brands we Carefully picked for You</p>`,
    });
    this.imageWrapper = new BaseComponent('div', {
      className: 'home-page__image-wrapper',
      innerHTML: `
      <img class="home-page__image" src="${image}" alt="TakeCare">
      <div class='home-page__circle'></div>
      `,
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
    const figureOne = `
    <div class="icon-wrapper">
      <svg class="icon icon-flask-science">
        <use href="${sprite}#flask-science"></use>
      </svg>
    </div>
    <figcaption class="advantages__description">science-based recipes and ingredients</figcaption>
  `;

    const flaskScienceComponent = new BaseComponent('figure', {
      className: 'advantages__item flask_science',
      innerHTML: figureOne,
    });

    const flaskScienceToCatalogLink = new Link({
      href: NameRoute.Catalog,
      className: 'go_to_shop',
    });
    if (flaskScienceComponent) {
      flaskScienceToCatalogLink.append(flaskScienceComponent);
    }

    const figureTwo = `
  <div class="icon-wrapper">
    <div class='icon-echo one'></div>
    <div class='icon-echo two'></div>
    <div class='icon-echo three'></div>
    <div class='icon-echo four'></div>
    <svg class="icon icon-planet">
      <use href="${sprite}#planet"></use>
    </svg>
    <span class='icon icon-sputnik'></span>
  </div>
  <figcaption class="advantages__description">best brands from all over the world</figcaption>
`;

    const planetComponent = new BaseComponent('figure', { className: 'advantages__item planet' });
    planetComponent.setInnerHTML(figureTwo);

    const planetToBrandsLink = new Link({ href: NameRoute.Brands, className: 'go_to_brands' });
    if (planetComponent) {
      planetToBrandsLink.append(planetComponent);
    }

    const figureThree = `
<div class="icon-wrapper">
  <span class='heart one'></span>
  <span class='heart two'></span>
  <span class='heart three'></span>
  <span class='heart four'></span>
  <span class='heart five'></span>
  <span class='heart six'></span>
  <span class='flask_white'></span>
  <svg class="icon icon-package">
    <use href="${sprite}#package"></use>
  </svg>
</div>
<figcaption class="advantages__description">testers and gifts with every purchase</figcaption>
`;

    const packageComponent = new BaseComponent('figure', { className: 'advantages__item package' });
    packageComponent.setInnerHTML(figureThree);

    const packageToCartLink = new Link({ href: NameRoute.Cart, className: 'go_to_cart' });
    if (packageComponent) {
      packageToCartLink.append(packageComponent);
    }

    this.advantages.append(flaskScienceComponent, planetToBrandsLink, packageComponent);
  }
}
