import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class NotFound extends BaseComponent {
  private container: Container;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'not-found' });

    this.container = new Container('not-found__container');
    this.container.setInnerHTML('404'); // TEMPORARY
    this.append(this.container);
  }
}
