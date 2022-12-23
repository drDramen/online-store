import { Navigation } from './../navigation/navigation';
import { Logo } from './../logo/logo';
import { BaseComponent } from '@/templates/base-component';
import { Container } from '../container/container';
import './header.scss';

export class Header extends BaseComponent {
  private container: Container;
  private logo: Logo = new Logo();
  private navigation: Navigation = new Navigation();

  constructor() {
    super('header', {
      className: 'header',
    });

    this.container = new Container('header__container');

    //this.container.setContent(`Header`);

    this.append(this.container);

    this.container.append(this.logo);

    this.container.append(this.navigation);
  }
}
