import { BaseComponent } from '@/templates/base-component';
import './logo.scss';

export class Logo extends BaseComponent {
  private logoImage: BaseComponent;
  private logoText: BaseComponent;

  constructor() {
    super('div', {
      className: 'logo',
    });

    this.logoImage = new BaseComponent('span', { className: 'logo__image' }, this.node);
    this.append(this.logoImage);

    this.logoText = new BaseComponent('div', { className: 'logo__text' }, this.node);
    this.logoText.setInnerHTML('TakeCare');
    this.append(this.logoText);
  }
}
