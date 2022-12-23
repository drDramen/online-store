export class BaseComponent {
  protected node: HTMLElement;
  protected children: BaseComponent[] = [];

  constructor(
    tagName: keyof HTMLElementTagNameMap = 'div',
    //props: Partial<HTMLElement> = {},
    props: Record<string, unknown> = {},
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

  getChildren(): BaseComponent[] {
    return this.children;
  }

  addClass(...className: string[]) {
    this.node.classList.add(...className);
  }

  removeClass(...className: string[]) {
    this.node.classList.remove(...className);
  }

  append(...rest: BaseComponent[]): void {
    rest.forEach((child) => {
      this.children.push(child);
      this.node.append(child.getNode());
    });
  }

  setContent(content: string): void {
    this.node.textContent = content;
  }

  setInnerHTML(html: string): void {
    this.node.innerHTML = html;
  }

  destroy(): void {
    this.children.forEach((child) => child.destroy());
    this.node.remove();
  }
}
