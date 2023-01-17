/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseComponent } from '@/templates/base-component';
import { CheckboxInner } from '../checkbox-inner/checkbox-inner';
import sprite from '../../assets/images/sprite.svg';
import { FilterGroup } from '@/enums/filter-name';
import { Product } from '@/interfaces/product';

export type value = {
  quantityTotal: number;
  value: string;
  name: FilterGroup;
  // name: keyof Pick<Product, 'brandName' | 'category' | 'for'>;
};
export class CheckboxFilterGroup extends BaseComponent {
  private toggle: BaseComponent<'button'>;
  private checkboxFilter: BaseComponent<'ul'>;
  constructor(
    private props: {
      title: string;
      name: string;
      valuesAll: value[];
      valuesFiltered: value[];
      currentFilters: string[];
    },
    private cbGetValues: (filterName: string) => string[],
    private cbRenderProducts: (products: Product[]) => void,
  ) {
    super('div', { className: 'filter-block filter__multy-choice' });
    this.toggle = new BaseComponent('button', {
      className: 'filter-block__toggle btn-reset',
      type: 'button',
      innerHTML: this.setToggleContent(),
    });
    this.toggle.getNode().addEventListener('click', () => {
      this.toggleClass('close');
    });
    this.checkboxFilter = new BaseComponent('ul', {
      className: 'checkbox-filter list-reset',
    });

    this.props.valuesAll.forEach((data) => {
      const { value } = data;
      const checked = props.currentFilters.includes(value);
      const outputData = { ...data, quantityFiltered: 0, checked };
      const filteredDatabyValue = props.valuesFiltered.find((f) => f.value === value);

      if (filteredDatabyValue) {
        outputData.quantityFiltered = filteredDatabyValue.quantityTotal;
      }

      const listItem = new BaseComponent('li', { className: 'checkbox-filter__item' });
      const checkboxWrapper = new CheckboxInner(
        outputData,
        this.cbGetValues,
        this.cbRenderProducts,
      );
      listItem.append(checkboxWrapper);
      this.checkboxFilter.append(listItem);
    });

    this.append(this.toggle, this.checkboxFilter);
  }

  private setToggleContent() {
    return `
      <span class="filter-block__toggle-title">${this.props.title}</span>
      <svg width="16" height="16" class="filter-block__toggle-icon">
        <use href="${sprite}#icon-angle-left"></use>
      </svg>
    `;
  }
}
