import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './top-menu.scss';

export class TopMenu extends BaseComponent {
  container: Container;
  private topMenuLeft: BaseComponent;
  private topMenuRight: BaseComponent;
  private all: BaseComponent;
  private brands: BaseComponent;
  private category: BaseComponent;
  private dropDown: BaseComponent;
  private changeView: BaseComponent;
  private favourites: BaseComponent;
  private sort: BaseComponent;
  private search: BaseComponent;
  private magnifyingGlass: BaseComponent;

  constructor() {
    super('div', { className: 'top_menu' });

    this.container = new Container('top_menu__container');
    this.append(this.container);

    this.topMenuLeft = new BaseComponent('div', { className: 'top_menu__left' });
    this.container.append(this.topMenuLeft);

    this.all = new BaseComponent('div', { className: 'top_menu__left__item' });
    this.all.setContent('All');
    this.topMenuLeft.append(this.all);

    this.brands = new BaseComponent('div', { className: 'top_menu__left__item' });
    this.brands.setContent('Brands');
    this.topMenuLeft.append(this.brands);

    this.category = new BaseComponent('div', { className: 'top_menu__left__item category' });
    this.category.setContent('Category');
    this.topMenuLeft.append(this.category);

    this.dropDown = new BaseComponent('span', { className: 'drop_down' });
    this.category.append(this.dropDown);

    this.topMenuRight = new BaseComponent('div', { className: 'top_menu__right' });
    this.container.append(this.topMenuRight);

    this.changeView = new BaseComponent('div', { className: 'top_menu__right__item view' });
    this.changeView.setContent('cards view');
    this.topMenuRight.append(this.changeView);

    this.favourites = new BaseComponent('div', { className: 'top_menu__right__item' });
    this.favourites.setContent('Favourites');
    this.topMenuRight.append(this.favourites);

    this.sort = new BaseComponent('div', { className: 'top_menu__right__item sort' });
    this.sort.setContent('Sort');
    this.topMenuRight.append(this.sort);

    this.dropDown = new BaseComponent('span', { className: 'drop_down' });
    this.sort.append(this.dropDown);

    this.search = new BaseComponent('div', { className: 'top_menu__right__item search' });
    this.search.setContent('Search');
    this.topMenuRight.append(this.search);

    this.magnifyingGlass = new BaseComponent('span', { className: 'magnifying_glass' });
    this.search.append(this.magnifyingGlass);
  }
}
