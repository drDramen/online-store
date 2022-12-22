import { BaseComponent } from '@/templates/base-component';
import { Container } from '../container/container';
import './header.scss';

export class Header extends BaseComponent {
  private container: Container;

  constructor() {
    super('header', {
      className: 'header',
    });

    this.container = new Container('header__container');

    this.container.setContent(`Header`);

    this.append(this.container);
  }
}
