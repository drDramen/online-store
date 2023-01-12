import { NameRoute } from '@/enums/name-route';
import { Link } from './../../../templates/link';
import { TopMenu } from '@/components/top-menu/top-menu';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';
import { FilterSideBar } from '@/components/filter-side-bar/filter-side-bar';
import { FilterService } from '@/services/filter-service';
import { ProductService } from '@/services/product-services';
import { ProductContainer } from '@/components/container-product/container-product';
import { Sorting } from '@/enums/sorting';
import './catalog-page.scss';
import { Filter } from '@/interfaces/currentFilters';
import { Product } from '@/interfaces/product';

export class CatalogPage extends BaseComponent {
  private container: Container;
  private topMenu: TopMenu = new TopMenu(() => {
    this.changeCardsView();
  });
  private filterSideBar: FilterSideBar;
  private productContainer: ProductContainer;

  constructor({ sort, ...props }: Record<string, string> & { sort?: Sorting }) {
    super('div', { className: 'catalog' });
    const products = ProductService.getAllProducts();
    ProductService.setCurrentProducts(FilterService.sort(products, sort || Sorting.NameAsc));
    FilterService.setFiltersData(this.convertProps(props));
    ProductService.setCurrentProducts(
      FilterService.filterByAll(ProductService.getCurrentProducts()),
    );

    this.container = new Container('catalog__container');
    this.append(this.container);

    this.container.append(this.topMenu);

    this.filterSideBar = new FilterSideBar(this.renderProducts.bind(this));

    this.productContainer = new ProductContainer();
    this.productContainer.updateProduct(ProductService.getCurrentProducts());
    this.container.append(this.filterSideBar, this.productContainer);

    const bottomButtons = new BaseComponent('div', { className: 'bottom_buttons' });
    this.append(bottomButtons);

    const showLessMoreButton = new BaseComponent('div', { className: 'show_less_more' });
    showLessMoreButton.setContent('Show Less');
    bottomButtons.append(showLessMoreButton);

    const goToCartLink = new Link({ href: NameRoute.Cart });
    bottomButtons.append(goToCartLink);

    const goToCartButton = new BaseComponent('div', { className: 'go_to_cart' });
    goToCartButton.setContent('Go to Cart');
    goToCartLink.append(goToCartButton);

    const toTopButton = new BaseComponent('div', { className: 'to_top_button' });
    bottomButtons.append(toTopButton);

    toTopButton.getNode().addEventListener('click', () => {
      window.scrollTo(0, 0);
    });

    const arrowUp = new BaseComponent('span', { className: 'arrow_up' });
    toTopButton.append(arrowUp);

    this.renderProducts(ProductService.getCurrentProducts());
  }

  updateProductSorting(sortName: Sorting) {
    ProductService.setCurrentProducts(
      FilterService.sort(ProductService.getCurrentProducts(), sortName),
    );
    this.renderProducts(ProductService.getCurrentProducts());
  }

  renderProducts(products: Product[]) {
    this.productContainer.updateProduct(products);
  }

  convertProps(props: Record<string, string>): Filter[] {
    const filters: Filter[] = [];

    for (const key in props) {
      filters.push({ name: key, values: props[key].split(',') });
    }
    return filters;
  }

  changeCardsView() {
    this.productContainer.getChildren().forEach((children) => children.toggleClass('card--active'));
  }
}
