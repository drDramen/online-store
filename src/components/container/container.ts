import { BaseComponent } from '@/templates/base-component';

export class Container extends BaseComponent {
  constructor(className?: string) {
    super('div', {
      className: `container`,
    });

    if (className) {
      this.addClass(className);
    }
  }
}
