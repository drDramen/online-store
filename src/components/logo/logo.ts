import { NameRoute } from '@/enums/name-route';
import { Link } from '@/templates/link';
import { BaseComponent } from '@/templates/base-component';
import './logo.scss';

const logoLink = { href: NameRoute.Home };

export class Logo extends BaseComponent {
  private logoImage: BaseComponent;
  private logoText: BaseComponent;
  private logoLink: Link;

  constructor() {
    super('div', {
      className: 'logo',
    });

    this.logoLink = new Link({ ...logoLink, className: 'logo__link' });
    this.append(this.logoLink);

    this.logoImage = new BaseComponent('span', { className: 'logo__image' });
    this.logoLink.append(this.logoImage);

    this.logoText = new BaseComponent('h1', { className: 'logo__text' });
    this.logoText.setInnerHTML('TakeCare');
    this.logoLink.append(this.logoText);

    Link.addNavigationLink(this.logoLink);
  }
}
