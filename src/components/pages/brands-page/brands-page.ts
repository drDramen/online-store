import { TopMenu } from '@/components/top-menu/top-menu';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import './brands-page.scss';

export class BrandsPage extends BaseComponent {
  private container: Container;
  private topMenu: TopMenu = new TopMenu();

  constructor(private props: Record<string, string>) {
    super('div', { className: 'brands' });

    this.append(this.topMenu);

    this.container = new Container('brands__container');
    this.append(this.container);

    const brandLetterB = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterB.setContent('B');
    this.container.append(brandLetterB);

    const brandsHolderB = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderB);

    const bioderma = new BaseComponent('div', { className: 'brands__name' });
    bioderma.setContent('Bioderma');
    brandsHolderB.append(bioderma);

    const biossance = new BaseComponent('div', { className: 'brands__name' });
    biossance.setContent('Biossance');
    brandsHolderB.append(biossance);

    const brandLetterC = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterC.setContent('C');
    this.container.append(brandLetterC);

    const brandsHolderC = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderC);

    const cerave = new BaseComponent('div', { className: 'brands__name' });
    cerave.setContent('CeraVe');
    brandsHolderC.append(cerave);

    const brandLetterD = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterD.setContent('D');
    this.container.append(brandLetterD);

    const brandsHolderD = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderD);

    const dearKlairs = new BaseComponent('div', { className: 'brands__name' });
    dearKlairs.setContent('Dear, Klairs');
    brandsHolderD.append(dearKlairs);

    const drunkElephant = new BaseComponent('div', { className: 'brands__name' });
    drunkElephant.setContent('Drunk Elephant');
    brandsHolderD.append(drunkElephant);

    const brandLetterI = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterI.setContent('I');
    this.container.append(brandLetterI);

    const brandsHolderI = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderI);

    const iamfrom = new BaseComponent('div', { className: 'brands__name' });
    iamfrom.setContent(`I'm From`);
    brandsHolderI.append(iamfrom);

    const brandLetterM = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterM.setContent('M');
    this.container.append(brandLetterM);

    const brandsHolderM = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderM);

    const manyo = new BaseComponent('div', { className: 'brands__name' });
    manyo.setContent('Manyo');
    brandsHolderM.append(manyo);

    const mediPeel = new BaseComponent('div', { className: 'brands__name' });
    mediPeel.setContent('Medi-Peel');
    brandsHolderM.append(mediPeel);

    const brandLetterP = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterP.setContent('P');
    this.container.append(brandLetterP);

    const brandsHolderP = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderP);

    const paulaChoice = new BaseComponent('div', { className: 'brands__name' });
    paulaChoice.setContent(`Paula's Choice`);
    brandsHolderP.append(paulaChoice);

    const pyunkangYul = new BaseComponent('div', { className: 'brands__name' });
    pyunkangYul.setContent('Pyunkang Yul');
    brandsHolderP.append(pyunkangYul);

    const purito = new BaseComponent('div', { className: 'brands__name' });
    purito.setContent('Purito');
    brandsHolderP.append(purito);

    const brandLetterS = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterS.setContent('S');
    this.container.append(brandLetterS);

    const brandsHolderS = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderS);

    const skadi = new BaseComponent('div', { className: 'brands__name' });
    skadi.setContent('Skadi');
    brandsHolderS.append(skadi);

    const brandLetterY = new BaseComponent('div', { className: 'brands__letter' });
    brandLetterY.setContent('Y');
    this.container.append(brandLetterY);

    const brandsHolderY = new BaseComponent('div', { className: 'brands__holder' });
    this.container.append(brandsHolderY);

    const yttp = new BaseComponent('div', { className: 'brands__name' });
    yttp.setContent('Youth to the People');
    brandsHolderY.append(yttp);
  }
}
