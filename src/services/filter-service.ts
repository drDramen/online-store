import { Product } from '@/interfaces/product';

export type filters = {
  brandName?: string[];
  price?: number[];
  category?: string[];
  for?: string[];
  availableAmount?: number[];
};

export class FilterService {
  static filtersData: filters = {};

  static getAvailableValues(
    data: Product[],
    key: keyof Pick<Product, 'brandName' | 'category' | 'for'>,
  ) {
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

    return { values: values };
  }
}
