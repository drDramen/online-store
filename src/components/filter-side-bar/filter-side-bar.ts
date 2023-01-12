/* eslint-disable @typescript-eslint/no-explicit-any */
import { filterSideBarComponents } from '@/data/filter-data';
import { Product } from '@/interfaces/product';
import { FilterService } from '@/services/filter-service';
import { ProductService } from '@/services/product-services';
import { BaseComponent } from '@/templates/base-component';
import { CheckboxFilterGroup } from '../checkbox-filter-group/checkbox-filter-group';
import './filter-side-bar.scss';

export class FilterSideBar extends BaseComponent<'form'> {
  constructor(private cbRenderProducts: (products: Product[]) => void) {
    super('form', { className: 'filter catalog__filter' });

    filterSideBarComponents.map((component) => {
      const allData = FilterService.getAvailableValues(
        ProductService.getAllProducts(),
        component.name,
      );

      const filteredData = FilterService.getAvailableValues(
        ProductService.getCurrentProducts(),
        component.name,
      );

      const currentFiltersByName = FilterService.filtersData.find((f) => f.name === component.name);

      const filter = new CheckboxFilterGroup(
        {
          title: component.title,
          name: component.name,
          valuesAll: allData,
          valuesFiltered: filteredData,
          currentFilters: currentFiltersByName ? currentFiltersByName.values : [],
        },
        this.getValues.bind(this),
        this.cbRenderProducts,
      );
      this.append(filter);
    });
  }

  getValues(filterName: string): string[] {
    const formData = new FormData(this.node);
    const values = formData.getAll(filterName) as string[];
    return values;
  }
}
