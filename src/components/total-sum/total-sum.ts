import { BaseComponent } from '@/templates/base-component';
import './total-sum.scss';

export class HeaderTotalSum extends BaseComponent {
  private totalSumText: BaseComponent;
  private totalSumAmount: BaseComponent;
  private totalSumCurrency: BaseComponent;

  constructor() {
    super('div', {
      className: 'total_sum',
    });

    this.totalSumText = new BaseComponent('span', { className: 'total_sum text' });
    this.totalSumText.setContent('Total Sum');
    this.append(this.totalSumText);

    this.totalSumAmount = new BaseComponent('span', { className: 'total_sum amount' });
    this.totalSumAmount.setContent('0');
    this.append(this.totalSumAmount);

    this.totalSumCurrency = new BaseComponent('span', { className: 'total_sum currency' });
    this.totalSumCurrency.setContent('$');
    this.append(this.totalSumCurrency);
  }
}
