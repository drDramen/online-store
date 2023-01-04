import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './favourites-page.scss';

export class FavouritesPage extends BaseComponent {
  container: Container;

  constructor() {
    super('div', { className: 'favourites' });

    this.container = new Container('favs__container');
    this.append(this.container);
  }
}
