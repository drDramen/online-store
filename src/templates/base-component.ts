export class BaseComponent {
  protected node;
  protected children: BaseComponent[] = [];

  constructor(
    tagName: keyof HTMLElementTagNameMap,
    props: Partial<HTMLElementTagNameMap[typeof tagName]> = {},
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

  getNode() {
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

  toggleClass(className: string) {
    this.node.classList.toggle(className);
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

  setAttribute(attribute: string, value: string): void {
    this.node.setAttribute(attribute, value);
  }

  destroy(): void {
    this.children.forEach((child) => child.destroy());
    this.node.remove();
  }
}
