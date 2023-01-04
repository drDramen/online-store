import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './top-menu.scss';

export class TopMenu extends BaseComponent {
  container: Container;
  private dropDown: BaseComponent;

  constructor() {
    super('div', { className: 'top_menu' });

    this.container = new Container('top_menu__container');
    this.append(this.container);

    const topMenuLeft = new BaseComponent('div', { className: 'top_menu__left' });
    this.container.append(topMenuLeft);

    const all = new BaseComponent('div', { className: 'top_menu__left__item' });
    all.setContent('All');
    topMenuLeft.append(all);

    const brands = new BaseComponent('div', { className: 'top_menu__left__item' });
    brands.setContent('Brands');
    topMenuLeft.append(brands);

    const category = new BaseComponent('div', { className: 'top_menu__left__item category' });
    category.setContent('Category');
    topMenuLeft.append(category);

    this.dropDown = new BaseComponent('span', { className: 'drop_down' });
    category.append(this.dropDown);

    const topMenuRight = new BaseComponent('div', { className: 'top_menu__right' });
    this.container.append(topMenuRight);

    const changeView = new BaseComponent('div', { className: 'top_menu__right__item view' });
    changeView.setContent('cards view');
    topMenuRight.append(changeView);

    const favourites = new BaseComponent('div', { className: 'top_menu__right__item' });
    favourites.setContent('Favourites');
    topMenuRight.append(favourites);

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
  }
}
