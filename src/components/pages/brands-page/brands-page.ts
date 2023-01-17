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

    const brands = [
      {
        letter: 'B',
        name: 'Bioderma',
        nameOne: 'Biossance',
        nameThree: ``,
      },
      {
        letter: 'C',
        name: 'CeraVe',
        nameOne: '',
        nameThree: ``,
      },
      {
        letter: 'D',
        name: `Dear, Klairs`,
        nameOne: 'Drunk Elephant',
        nameThree: ``,
      },
      {
        letter: 'I',
        name: `I'm From`,
        nameOne: '',
        nameThree: ``,
      },
      {
        letter: 'M',
        name: `Manyo`,
        nameOne: 'Medi-Peel',
        nameThree: ``,
      },
      {
        letter: 'P',
        name: `Paula's Choice`,
        nameOne: 'Pyunkang Yul',
        nameThree: `Purito`,
      },
      {
        letter: 'S',
        name: `Skadi`,
        nameOne: '',
        nameThree: ``,
      },
      {
        letter: 'Y',
        name: `Youth to the People`,
        nameOne: '',
        nameThree: ``,
      },
    ];

    brands.map((brand) => {
      const brandLetter = new BaseComponent('div', { className: 'brands__letter' });
      brandLetter.setContent(brand.letter);
      this.container.append(brandLetter);
      const brandsHolder = new BaseComponent('div', { className: 'brands__holder' });
      this.container.append(brandsHolder);
      const brandName = new BaseComponent('div', { className: 'brands__name' });
      brandName.setContent(brand.name);
      brandsHolder.append(brandName);
      const brandNameOne = new BaseComponent('div', { className: 'brands__name' });
      brandNameOne.setContent(brand.nameOne);
      brandsHolder.append(brandNameOne);
      const brandNameThree = new BaseComponent('div', { className: 'brands__name' });
      brandNameThree.setContent(brand.nameThree);
      brandsHolder.append(brandNameThree);
    });
  }
}
