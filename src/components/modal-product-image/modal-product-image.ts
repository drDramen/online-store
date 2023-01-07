import { BaseComponent } from './../../templates/base-component';

export class ModalProductImage extends BaseComponent {
  constructor(private src: string, private onclick: (src: string) => void) {
    super('div', { className: 'product_image' });
  }
}
