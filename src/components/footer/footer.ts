import { BaseComponent } from '@/templates/base-component';
import { Container } from '../container/container';
import './footer.scss';
import rsSchoolLogo from '../../assets/images/rs-school.svg';

export class Footer extends BaseComponent {
  private container: Container;

  constructor() {
    super('footer', {
      className: 'footer',
    });

    this.container = new Container('footer__container');

    this.container.setInnerHTML(`
    <div class="footer__copy">
      <span>&copy;</span>
      <span>2022</span>
      <span class="footer__github"><a href="https://github.com/drDramen">dr.Dramen</a></span>
      <span class="footer__github"><a href="https://github.com/lyutails">lyutails</a></span>
    </div>
    <div class="footer__rs">
      <a href="https://rs.school/js/">
        <img class="rsschool" src="${rsSchoolLogo}" alt="RS Logo">
      </a>
    </div>
    `);

    this.append(this.container);
  }
}
