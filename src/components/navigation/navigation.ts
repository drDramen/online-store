import { AppRoute } from './../enums/enums';
import { BaseComponent } from '@/templates/base-component';
import './navigation.scss';

const navigationLinks = [
  { text: 'Home', href: AppRoute.Home },
  { text: 'Shop', href: AppRoute.Shop },
  { text: 'Contacts', href: AppRoute.Contacts },
];

export class Navigation extends BaseComponent {
  private navigationItems: BaseComponent;

  constructor() {
    super('nav', {
      className: 'navigation',
    });

    this.navigationItems = new BaseComponent('ul', { className: 'navigation__items' });
    this.append(this.navigationItems);

    this.createNavigationItems();
  }

  onPathChange() {
    const path = window.location.pathname;
    console.log(path);
  }

  createNavigationItems() {
    navigationLinks.forEach(({ text, href }) => {
      const navigationItem = new BaseComponent('li', { className: 'navigation__item' });
      const navigationLink = new BaseComponent('a', {
        className: 'navigation__link',
        href: href,
        textContent: text,
      });
      navigationLink.getNode().addEventListener('click', (event: Event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
        this.onPathChange();
        this.navigationItems.getChildren().forEach((element) => {
          element.removeClass('active');
        });
        const { currentTarget } = event;
        if (currentTarget instanceof HTMLElement) {
          //currentTarget.classList.add('active');
          currentTarget.parentElement?.classList.add('active');
        }
      });
      navigationItem.append(navigationLink);
      this.navigationItems.append(navigationItem);
    });

    //window.addEventListener('popstate', this.onPathChange.bind(this));
    window.addEventListener('popstate', () => {
      this.onPathChange();
    });
  }
}
