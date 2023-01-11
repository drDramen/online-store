/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseComponent } from '@/templates/base-component';
import { CheckboxInner } from '../checkbox-inner/checkbox-inner';
import sprite from '../../assets/images/sprite.svg';

export class CheckboxFilterGroup extends BaseComponent {
  private toggle: BaseComponent<'button'>;
  private checkboxFilter: BaseComponent<'ul'>;
  constructor(
    private props: {
      title: string;
      name: string;
      values: any[];
    },
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

    this.props.values.forEach((value) => {
      const listItem = new BaseComponent('li', { className: 'checkbox-filter__item' });
      const checkboxWrapper = new CheckboxInner(value);
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
