import { BaseComponent } from '@/templates/base-component';
import './overlay.scss';

export class Overlay extends BaseComponent {
  private overlay: BaseComponent;

  constructor() {
    super('div', { className: 'overlay' });

    this.overlay = new BaseComponent('div', { className: 'overlay' });
    this.append(this.overlay);
  }
}
