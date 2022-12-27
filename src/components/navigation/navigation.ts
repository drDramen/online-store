import { NameRoute } from '@/enums/name-route';
import { BaseComponent } from '@/templates/base-component';
import { Link } from '@/templates/link';
import './navigation.scss';

const navigationLinks = [
  { textContent: 'Home', href: NameRoute.Home },
  { textContent: 'Shop', href: NameRoute.Catalog },
  { textContent: 'Contacts', href: NameRoute.Contacts },
];

export class Navigation extends BaseComponent {
  private navigationList: BaseComponent;

  constructor() {
    super('nav', {
      className: 'navigation',
    });

    this.navigationList = new BaseComponent('ul', { className: 'navigation__items list-reset' });
    this.append(this.navigationList);

    this.createNavigationItems();
    Link.changeActive();
  }

  private createNavigationItems() {
    navigationLinks.forEach((props) => {
      const navItem = new BaseComponent('li', { className: 'navigation__item' });
      const navLink = new Link({
        ...props,
        className: 'navigation__link',
      });

      Link.addNavigationLink(navLink);
      navItem.append(navLink);
      this.navigationList.append(navItem);
    });
  }
}
