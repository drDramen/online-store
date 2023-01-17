import { NameRoute } from '@/enums/name-route';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import { Link } from '@/templates/link';
import './top-menu.scss';

const favouritesLink = { href: NameRoute.Favourites };
const brandsLink = { href: NameRoute.Brands };
const allLink = { href: NameRoute.Catalog };

export class TopMenu extends BaseComponent {
  container: Container;
  private dropDownCategory: BaseComponent;
  private dropDownSort: BaseComponent;
  private changeView: BaseComponent;
  private favouritesLink: Link;
  private brandsLink: Link;
  private allLink: Link;
  private changeColumnsView: BaseComponent;

  constructor(private onclick?: () => void) {
    super('div', { className: 'catalog__top_menu top_menu' });

    this.container = new Container('top_menu__container');
    this.append(this.container);

    const topMenuLeft = new BaseComponent('div', { className: 'top_menu__left' });
    this.container.append(topMenuLeft);

    this.allLink = new Link({ ...allLink, className: 'top_menu__left__item all_link' });
    topMenuLeft.append(this.allLink);

    const all = new BaseComponent('div', { className: 'top_menu__left__item' });
    all.setContent('All');
    this.allLink.append(all);

    this.brandsLink = new Link({ ...brandsLink, className: 'top_menu__left__item brands_link' });
    topMenuLeft.append(this.brandsLink);

    const brands = new BaseComponent('div', { className: 'top_menu__left__item' });
    brands.setContent('Brands');
    this.brandsLink.append(brands);

    const category = new BaseComponent('div', { className: 'top_menu__left__item category' });
    category.setContent('Category');
    topMenuLeft.append(category);

    this.dropDownCategory = new BaseComponent('span', { className: 'drop_down' });
    category.append(this.dropDownCategory);

    const dropDownMenuCategory = new BaseComponent('ul', { className: 'drop_down_menu category' });
    this.dropDownCategory.append(dropDownMenuCategory);

    const menuItemCleanser = new BaseComponent('li', { className: 'menu_item cleanser' });
    menuItemCleanser.setContent('Cleanser');
    dropDownMenuCategory.append(menuItemCleanser);
    const menuItemToner = new BaseComponent('li', { className: 'menu_item toner' });
    menuItemToner.setContent('Toner');
    dropDownMenuCategory.append(menuItemToner);
    const menuItemEssence = new BaseComponent('li', { className: 'menu_item essence' });
    menuItemEssence.setContent('Essence');
    dropDownMenuCategory.append(menuItemEssence);
    const menuItemSerum = new BaseComponent('li', { className: 'menu_item serum' });
    menuItemSerum.setContent('Serum');
    dropDownMenuCategory.append(menuItemSerum);
    const menuItemCream = new BaseComponent('li', { className: 'menu_item cream' });
    menuItemCream.setContent('Cream');
    dropDownMenuCategory.append(menuItemCream);
    const menuItemExfoliant = new BaseComponent('li', { className: 'menu_item exfoliant' });
    menuItemExfoliant.setContent('Exfoliant');
    dropDownMenuCategory.append(menuItemExfoliant);
    const menuItemEyeCream = new BaseComponent('li', { className: 'menu_item cleanser' });
    menuItemEyeCream.setContent('Eyes');
    dropDownMenuCategory.append(menuItemEyeCream);
    const menuItemMask = new BaseComponent('li', { className: 'menu_item cleanser' });
    menuItemMask.setContent('Mask');
    dropDownMenuCategory.append(menuItemMask);
    const menuItemOil = new BaseComponent('li', { className: 'menu_item cleanser' });
    menuItemOil.setContent('Oil');
    dropDownMenuCategory.append(menuItemOil);
    const menuItemLipCare = new BaseComponent('li', { className: 'menu_item cleanser' });
    menuItemLipCare.setContent('Lips');
    dropDownMenuCategory.append(menuItemLipCare);
    const menuItemSunscreen = new BaseComponent('li', { className: 'menu_item cleanser' });
    menuItemSunscreen.setContent('Sunscreen');
    dropDownMenuCategory.append(menuItemSunscreen);

    this.dropDownCategory.getNode().addEventListener('click', () => {
      dropDownMenuCategory.toggleClass('active');
      menuItemCleanser.toggleClass('active');
      menuItemToner.toggleClass('active');
      menuItemEssence.toggleClass('active');
      menuItemSerum.toggleClass('active');
      menuItemCream.toggleClass('active');
      menuItemExfoliant.toggleClass('active');
      menuItemEyeCream.toggleClass('active');
      menuItemMask.toggleClass('active');
      menuItemOil.toggleClass('active');
      menuItemLipCare.toggleClass('active');
      menuItemSunscreen.toggleClass('active');
    });

    const found = new BaseComponent('div', { className: 'top_menu__left__item found' });
    found.setContent('Found: 0');
    topMenuLeft.append(found);

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

    this.dropDownSort = new BaseComponent('span', { className: 'drop_down' });
    sort.append(this.dropDownSort);

    const dropDownMenuSort = new BaseComponent('div', { className: 'drop_down_menu sort' });
    this.dropDownSort.append(dropDownMenuSort);

    const menuItemPriceDown = new BaseComponent('span', { className: 'menu_item price_down' });
    menuItemPriceDown.setContent('by Price Down');
    dropDownMenuSort.append(menuItemPriceDown);
    const menuItemPriceUp = new BaseComponent('span', { className: 'menu_item price_up' });
    menuItemPriceUp.setContent('by Price Up');
    dropDownMenuSort.append(menuItemPriceUp);

    const az = new BaseComponent('span', { className: 'menu_item az' });
    az.setContent('A-Z');
    dropDownMenuSort.append(az);
    const za = new BaseComponent('span', { className: 'menu_item za' });
    za.setContent('Z-A');
    dropDownMenuSort.append(za);

    this.dropDownSort.getNode().addEventListener('click', () => {
      dropDownMenuSort.toggleClass('active');
      menuItemPriceDown.toggleClass('active');
      menuItemPriceUp.toggleClass('active');
      az.toggleClass('active');
      za.toggleClass('active');
    });

    const search = new BaseComponent('div', { className: 'top_menu__right__item search' });
    search.setContent('Search');
    topMenuRight.append(search);

    const magnifyingGlass = new BaseComponent('span', { className: 'magnifying_glass' });
    search.append(magnifyingGlass);

    this.changeViewButton();

    this.changeColumnsViewButton();

    Link.addNavigationLink(this.favouritesLink);
    Link.addNavigationLink(this.allLink);
  }

  changeViewButton() {
    const numberOfButtonElements = 8;
    for (let i = 0; i < numberOfButtonElements; i++) {
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
    const numberOfButtonElements = 12;
    for (let i = 0; i < numberOfButtonElements; i++) {
      const changeViewElement = new BaseComponent('span', { className: 'element' });
      this.changeColumnsView.append(changeViewElement);
    }
    this.changeColumnsView.getNode().addEventListener('click', () => {
      let defaultNumberOfColumns = 4;
      const previousNumberOfColumns = +getComputedStyle(document.documentElement).getPropertyValue(
        '--product-column',
      );
      if (previousNumberOfColumns !== 1) {
        defaultNumberOfColumns = previousNumberOfColumns - 1;
      }
      document.documentElement.style.setProperty(
        '--product-column',
        defaultNumberOfColumns.toString(),
      );
    });
  }
}
