export class BaseComponent {
  protected node: HTMLElement;
  protected children: BaseComponent[] = [];

  constructor(
    tagName: keyof HTMLElementTagNameMap = 'div',
    props: Partial<HTMLElement> = {},
    parentNode?: HTMLElement,
  ) {
    this.node = document.createElement(tagName);

    if (props) {
      Object.assign(this.node, props);
    }

    if (parentNode) {
      parentNode.append(this.node);
    }
  }

  getNode(): HTMLElement {
    return this.node;
  }

  addClass(...className: string[]) {
    this.node.classList.add(...className);
  }

  removeClass(...className: string[]) {
    this.node.classList.remove(...className);
  }

  append(...rest: HTMLElement[]): void;
  append(...rest: BaseComponent[]): void;
  append(...rest: BaseComponent[] | HTMLElement[]): void {
    rest.forEach((child) => {
      if (child instanceof BaseComponent) {
        this.children.push(child);
        this.node.append(child.getNode());
      } else {
        this.node.append(child);
      }
    });
  }

  destroy(): void {
    this.children.forEach((child) => child.destroy());
    this.node.remove();
  }
}
