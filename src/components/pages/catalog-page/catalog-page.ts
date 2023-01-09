import { TopMenu } from '@/components/top-menu/top-menu';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import { FilterSideBar } from '@/components/filter-side-bar/filter-side-bar';
import { FilterService } from '@/services/filter-service';
import { ProductService } from '@/services/product-services';
import { ProductContainer } from '@/components/container-product/container-product';
import './catalog-page.scss';

export class CatalogPage extends BaseComponent {
  container: Container;
  private topMenu: TopMenu = new TopMenu();
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
}
