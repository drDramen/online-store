import { BaseComponent } from '@/templates/base-component';

export class Container extends BaseComponent {
  constructor(className = '') {
    super('div', {
      className: `container` + className,
    });
  }
}
