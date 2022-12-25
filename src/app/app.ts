import { Header } from './../components/header/header';
import { BaseComponent } from '@/templates/base-component';
import { Footer } from './../components/footer/footer';
import { Main } from '@/components/main/main';

export class App {
  private root: HTMLElement;
  private footer: Footer = new Footer();
  private header: Header = new Header();
  private main: Main = new Main();

  constructor(element: HTMLElement) {
    this.root = element;
  }

  create() {
    this.append(this.header, this.main, this.footer);
  }

  append(...elements: BaseComponent[]) {
    elements.forEach((element) => {
      this.root.append(element.getNode());
    });
  }
}
