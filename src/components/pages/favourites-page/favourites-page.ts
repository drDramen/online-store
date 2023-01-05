import { TopMenu } from '@/components/top-menu/top-menu';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './favourites-page.scss';

export class FavouritesPage extends BaseComponent {
  container: Container;
  private topMenu: TopMenu = new TopMenu();

  constructor() {
    super('div', { className: 'favourites' });

    this.append(this.topMenu);

    this.container = new Container('favs__container');
    this.append(this.container);
  }
}
