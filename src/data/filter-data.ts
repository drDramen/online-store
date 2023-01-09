import { CheckboxFilterGroup } from '@/components/checkbox-filter-group/checkbox-filter-group';

export const filterSideBarComponents = [
  { name: 'brandName', component: CheckboxFilterGroup, title: 'Brand' },
  { name: 'category', component: CheckboxFilterGroup, title: 'Category' },
  { name: 'for', component: CheckboxFilterGroup, title: 'For' },
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
