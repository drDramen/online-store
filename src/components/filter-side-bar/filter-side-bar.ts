/* eslint-disable @typescript-eslint/no-explicit-any */
import { filterSideBarComponents } from '@/data/filter-data';
import { Product } from '@/interfaces/product';
import { BaseComponent } from '@/templates/base-component';
import { CheckboxFilterGroup } from '../checkbox-filter-group/checkbox-filter-group';
import './filter-side-bar.scss';

export class FilterSideBar extends BaseComponent {
  constructor(
    callback: (name: keyof Pick<Product, 'brandName' | 'category' | 'for'>) => { values: any[] },
  ) {
    super('aside', { className: 'filter catalog__filter' });

    filterSideBarComponents.map((component) => {
      const data = callback(
        component.name as keyof Pick<Product, 'brandName' | 'category' | 'for'>,
      );

      const filter = new CheckboxFilterGroup({
        title: component.title,
        name: component.name,
        values: data.values,
      });
      this.append(filter);
    });

    // const brandName = new CheckboxFilterGroup()
  }
}
