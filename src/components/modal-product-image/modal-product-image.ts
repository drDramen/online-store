import { BaseComponent } from './../../templates/base-component';

export class ModalProductImage extends BaseComponent {
  constructor(private src: string, private onclick: (src: string) => void) {
    super('div', { className: 'product_image' });
    this.getNode().style.backgroundImage = `url('${location.origin}/${this.src}')`;
    this.getNode().addEventListener('click', () => {
      this.onclick(this.src);
    });
  }

  setSRC(src: string) {
    this.src = src;
    this.getNode().style.backgroundImage = `url('${location.origin}/${src}')`;
  }
}
