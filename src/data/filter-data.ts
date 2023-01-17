import { CheckboxFilterGroup } from '@/components/checkbox-filter-group/checkbox-filter-group';
import { FilterGroup } from '@/enums/filter-name';

export const filterSideBarComponents = [
  { name: FilterGroup.BrandName, component: CheckboxFilterGroup, title: 'Brand' },
  { name: FilterGroup.Category, component: CheckboxFilterGroup, title: 'Category' },
  { name: FilterGroup.For, component: CheckboxFilterGroup, title: 'For' },
  // { name: 'price', component: DualSliderGroup, title: 'Price' },
  // { name: 'availableAmount', component: DualSliderGroup, title: 'Amount' },
  // { name: 'bestseller', component: OnOffFilter, title: 'Amount', value: false },
];

export const sortComponent = {
  name: 'sort',
  // component: SortByField,
};

export const searchTextComponent = {
  name: 'searchText',
  // component: SearchField,
};
