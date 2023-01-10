import { TopMenu } from '@/components/top-menu/top-menu';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import { FilterSideBar } from '@/components/filter-side-bar/filter-side-bar';
import { FilterService } from '@/services/filter-service';
import { ProductService } from '@/services/product-services';
import { ProductContainer } from '@/components/container-product/container-product';
//import { CardFull } from './../../cards/card-full/card-full';
import './catalog-page.scss';

export class CatalogPage extends BaseComponent {
  container: Container;
  //private cardFull: CardFull = new CardFull(products);
  private topMenu: TopMenu = new TopMenu(() => {
    this.changeWrapperDivisions();
    //this.cardFull.changeCardView();
  });
  private filterSideBar: FilterSideBar;
  private productContainer: ProductContainer;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'catalog' });

    this.container = new Container('catalog__container');
    this.append(this.container);

    this.container.append(this.topMenu);

    this.filterSideBar = new FilterSideBar((key) =>
      FilterService.getAvailableValues(ProductService.getAllProducts(), key),
    );

    this.productContainer = new ProductContainer();
    this.productContainer.updateProduct(ProductService.getAllProducts());
    this.container.append(this.filterSideBar, this.productContainer);
  }

  changeWrapperDivisions() {
    let newValue = 4;
    const oldValue = getComputedStyle(document.documentElement).getPropertyValue(
      '--product-column',
    );
    const numberOldValue = +oldValue;
    if (numberOldValue !== 1) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      newValue = numberOldValue - 1;
      document.documentElement.style.setProperty('--product-column', 'newValue');
    } else if (numberOldValue === 1) {
      document.documentElement.style.setProperty('--product-column', 'numberOldValue');
    }
    //this.productContainer.toggleClass('products--active');
  }
}
