import { BaseComponent } from '@/templates/base-component';

export class Overlay extends BaseComponent {
  constructor() {
    super('div', { className: 'overlay' });
  }
}
