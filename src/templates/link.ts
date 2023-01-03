import { Router } from '@/router/router';
import { BaseComponent } from './base-component';

export class Link extends BaseComponent<'a'> {
  private static navigationLinks: Link[] = [];

  constructor(props: Partial<HTMLAnchorElement>) {
    super('a', props);
    this.node.addEventListener('click', this.changeRoute);
  }

  private changeRoute = (event: Event) => {
    event.preventDefault();
    const { currentTarget } = event;
    if (currentTarget instanceof HTMLAnchorElement) {
      window.history.pushState({}, '', currentTarget.href);
      Link.changeActive();
      Router.onPathChangeHandler();
    }
  };

  static addNavigationLink(navigationLink: Link) {
    this.navigationLinks.push(navigationLink);
    Link.changeActive();
  }

  static changeActive() {
    const path = window.location.pathname;
    Link.navigationLinks.forEach((link) => {
      if (link.getNode().getAttribute('href') === path) {
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  }
}
