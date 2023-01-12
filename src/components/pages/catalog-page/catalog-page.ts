import { NameRoute } from '@/enums/name-route';
import { Link } from './../../../templates/link';
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
  private topMenu: TopMenu = new TopMenu(() => {
    this.changeCardsView();
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

    const bottomButtons = new BaseComponent('div', { className: 'bottom_buttons' });
    this.append(bottomButtons);

    const showLessMoreButton = new BaseComponent('div', { className: 'show_less_more' });
    showLessMoreButton.setContent('Show Less');
    bottomButtons.append(showLessMoreButton);

    const paginationButtons = new BaseComponent('div', { className: 'pagination_buttons' });
    bottomButtons.append(paginationButtons);

    for (let i = 1; i <= 5; i++) {
      const paginationCircle = new BaseComponent('span', { className: 'pagination_circle' });
      paginationButtons.append(paginationCircle);
    }

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
  }

  changeCardsView() {
    this.productContainer.getChildren().forEach((children) => children.toggleClass('card--active'));
  }
}
