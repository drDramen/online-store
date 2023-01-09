import { NameRoute } from '@/enums/name-route';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import { Link } from '@/templates/link';
import './top-menu.scss';

const favouritesLink = { href: NameRoute.Favourites };
const brandsLink = { href: NameRoute.Brands };

export class TopMenu extends BaseComponent {
  container: Container;
  private dropDown: BaseComponent;
  private changeView: BaseComponent;
  private favouritesLink: Link;
  private brandsLink: Link;
  private changeColumnsView: BaseComponent;

  constructor(private onclick?: () => void) {
    super('div', { className: 'top_menu' });

    this.container = new Container('top_menu__container');
    this.append(this.container);

    const topMenuLeft = new BaseComponent('div', { className: 'top_menu__left' });
    this.container.append(topMenuLeft);

    const all = new BaseComponent('div', { className: 'top_menu__left__item' });
    all.setContent('All');
    topMenuLeft.append(all);

    this.brandsLink = new Link({ ...brandsLink, className: 'top_menu__left__item brands_link' });
    topMenuLeft.append(this.brandsLink);

    const brands = new BaseComponent('div', { className: 'top_menu__left__item' });
    brands.setContent('Brands');
    this.brandsLink.append(brands);

    const category = new BaseComponent('div', { className: 'top_menu__left__item category' });
    category.setContent('Category');
    topMenuLeft.append(category);

    this.dropDown = new BaseComponent('span', { className: 'drop_down' });
    category.append(this.dropDown);

    const topMenuRight = new BaseComponent('div', { className: 'top_menu__right' });
    this.container.append(topMenuRight);

    this.changeColumnsView = new BaseComponent('div', {
      className: 'top_menu__right__item columns_view',
    });
    topMenuRight.append(this.changeColumnsView);

    this.changeView = new BaseComponent('div', { className: 'top_menu__right__item view' });
    topMenuRight.append(this.changeView);

    this.favouritesLink = new Link({
      ...favouritesLink,
      className: 'top_menu__right__item favourites_link',
    });
    topMenuRight.append(this.favouritesLink);

    const favourites = new BaseComponent('div', { className: 'top_menu__right__item' });
    favourites.setContent('Favourites');
    this.favouritesLink.append(favourites);

    const sort = new BaseComponent('div', { className: 'top_menu__right__item sort' });
    sort.setContent('Sort');
    topMenuRight.append(sort);

    this.dropDown = new BaseComponent('span', { className: 'drop_down' });
    sort.append(this.dropDown);

    const search = new BaseComponent('div', { className: 'top_menu__right__item search' });
    search.setContent('Search');
    topMenuRight.append(search);

    const magnifyingGlass = new BaseComponent('span', { className: 'magnifying_glass' });
    search.append(magnifyingGlass);

    this.changeViewButton();

    this.changeColumnsViewButton();

    Link.addNavigationLink(this.favouritesLink);
  }

  changeViewButton() {
    for (let i = 0; i < 8; i++) {
      const changeViewElement = new BaseComponent('span', { className: 'element' });
      this.changeView.append(changeViewElement);
      this.changeView.getNode().addEventListener('click', () => {
        changeViewElement.toggleClass('active');
      });
    }
    this.changeView.getNode().addEventListener('click', () => {
      this.onclick?.();
    });
  }

  changeColumnsViewButton() {
    for (let i = 0; i < 12; i++) {
      const changeViewElement = new BaseComponent('span', { className: 'element' });
      this.changeColumnsView.append(changeViewElement);
      this.changeColumnsView.getNode().addEventListener('click', () => {
        changeViewElement.toggleClass('active');
      });
    }
    this.changeColumnsView.getNode().addEventListener('click', () => {
      this.onclick?.();
      this.changeColumnsView.toggleClass('active_one');
      // if (this.changeColumnsView.classListContains('active_one')) {
      //   this.changeColumnsView.toggleClass('active_two');
      // }
    });
  }
}
