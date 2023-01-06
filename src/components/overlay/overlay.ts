import { BaseComponent } from '@/templates/base-component';

export class Overlay extends BaseComponent {
  private overlay: BaseComponent;

  constructor() {
    super('div', { className: 'overlay' });

    this.overlay = new BaseComponent('div', { className: 'overlay--active' });
    this.append(this.overlay);
  }
}
