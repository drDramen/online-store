import { BaseComponent } from '@/templates/base-component';
import './logo.scss';

export class Logo extends BaseComponent {
  private logoImage: BaseComponent;
  private logoText: BaseComponent;
  private logoTextFirst: BaseComponent;
  private logoTextSecond: BaseComponent;

  constructor() {
    super('div', {
      className: 'logo',
    });

    this.logoImage = new BaseComponent('span', { className: 'logo__image' }, this.node);
    this.append(this.logoImage);

    this.logoText = new BaseComponent('div', { className: 'logo__text' }, this.node);

    this.logoTextFirst = new BaseComponent('span', { className: 'logo_colour_one' }, this.node);
    this.logoTextFirst.setInnerHTML('Take');
    this.logoText.append(this.logoTextFirst);

    this.logoTextSecond = new BaseComponent('span', { className: 'logo_colour_two' }, this.node);
    this.logoTextSecond.setInnerHTML('Care');
    this.logoText.append(this.logoTextSecond);
  }
}
