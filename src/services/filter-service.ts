import { FilterGroup, FilterMinMax, FilterOnOff } from '@/enums/filter-name';
import { Sorting } from '@/enums/sorting';
import { Filter } from '@/interfaces/currentFilters';
import { Product } from '@/interfaces/product';
import { ProductService } from './product-services';

export class FilterService {
  static filtersData: Filter[] = [];

  static setFiltersData(filters: Filter[]) {
    this.filtersData = filters;
  }

  static updateFiltersData(filter: Filter) {
    this.filtersData = [...this.filtersData.filter((f) => f.name !== filter.name), filter];
    ProductService.setCurrentProducts(this.filterByAll(ProductService.getAllProducts()));
  }

  static getAvailableValues(data: Product[], key: FilterGroup) {
    const values = data.reduce(
      (values: { quantityTotal: number; value: string; name: typeof key }[], product) => {
        const value = product[key];
        const element = values.find((element) => element.value === value);

        if (element === undefined) {
          values.push({
            quantityTotal: 1,
            value: value,
            name: key,
          });
        } else {
          element.quantityTotal += 1;
        }

        return values;
      },
      [],
    );

    return values;
  }

  static filterBy(products: Product[], filterFunction: (products: Product) => boolean): Product[] {
    return products.filter(filterFunction);
  }

  static filterByAll(products: Product[]): Product[] {
    return this.filtersData.reduce<Product[]>(
      (data, filter) => this.filterBy(data, this.getFilterFunction(filter)),
      products,
    );
  }

  static getFilterFunction(filter: Filter) {
    return this.filterRouting(filter);
  }

  static filterRouting(filter: Filter): (products: Product) => boolean {
    const { name, values } = filter;

    switch (name) {
      case FilterGroup.BrandName:
        return values.length ? this.filterByBrandName(values) : () => true;
      case FilterGroup.Category:
        return values.length ? this.filterByCategory(values) : () => true;
      case FilterGroup.For:
        return values.length ? this.filterByFor(values) : () => true;
      case FilterMinMax.Price:
        return values.length ? this.filterByMinMax(values) : () => true;
      case FilterMinMax.AvailableAmount:
        return values.length ? this.filterByMinMax(values) : () => true;
      case FilterOnOff.Bestseller:
        return values.length ? this.filterByBestseller(values) : () => true;

      default:
        return () => true;
    }
  }

  static filterByBrandName(values: string[]) {
    return (products: Product) => values.includes(products.brandName);
  }

  static filterByCategory(values: string[]) {
    return (products: Product) => values.includes(products.category);
  }

  static filterByFor(values: string[]) {
    return (products: Product) => values.includes(products.for);
  }

  static filterByMinMax(values: string[]) {
    const prices = this.convertToNumbers(values);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return (products: Product) => products.price >= min && products.price <= max;
  }

  static sort(products: Product[], sortName: Sorting) {
    const sortFunction = this.getSortFunction(sortName);

    return products.sort(sortFunction);
  }

  static filterByBestseller(values: string[]) {
    return values.at(-1) !== 'false' ? (products: Product) => products.bestseller : () => true;
  }

  static convertToNumbers(values: string[]): number[] {
    return values.reduce<number[]>((acc, crnt) => {
      const num = Number(crnt);
      if (!Number.isNaN(num)) {
        acc.push(num);
      }

      return acc;
    }, []);
  }

  private static getSortFunction(sortName: Sorting) {
    switch (sortName) {
      case 'nameAsc':
        return this.compareAsc('productName');
      case 'priceAsc':
        return this.compareAsc('price');
      case 'nameDesc':
        return this.compareDesc('productName');
      case 'priceDesc':
        return this.compareDesc('price');
    }
  }

  private static compareAsc(field: 'productName' | 'price') {
    return (a: Product, b: Product) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }

      return 0;
    };
  }

  private static compareDesc(field: 'productName' | 'price') {
    return (a: Product, b: Product) => {
      if (a[field] > b[field]) {
        return -1;
      }
      if (a[field] < b[field]) {
        return 1;
      }

      return 0;
    };
  }
}
