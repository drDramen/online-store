import { Header } from './../components/header/header';

export class App {
  private app: HTMLElement = document.getElementById('app') as HTMLElement;
  private header: Header = new Header();

  init() {
    this.app.append(this.header.getNode());
  }
}
