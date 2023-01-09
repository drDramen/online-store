import { BaseComponent } from '@/templates/base-component';

export type checkboxProps = {
  quantityTotal: number;
  quantityFiltered?: number;
  value: string;
  name: string;
  checked?: boolean;
};

export class CheckboxInner extends BaseComponent {
  constructor(private props: checkboxProps) {
    super('label', {
      className: 'checkbox-filter__item-wrapper',
    });

    this.render();
  }

  render() {
    const { quantityTotal, quantityFiltered, value, name, checked } = this.props;

    const titleElement = new BaseComponent('span', {
      className: 'checkbox-filter__title',
      textContent: value,
    });

    const quantityElement = new BaseComponent('span', {
      className: 'checkbox-filter__quantity',
      textContent: `${quantityFiltered}/${quantityTotal}`,
    });

    const inputElement = new BaseComponent('input', {
      className: 'checkbox-filter__input input-reset',
      type: 'checkbox',
      name: name,
      value: value,
      checked: checked,
    });

    const iconElement = new BaseComponent('span', {
      className: 'checkbox-filter__icon',
    });

    this.append(titleElement, quantityElement, inputElement, iconElement);
  }
}
