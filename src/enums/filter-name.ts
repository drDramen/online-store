export enum FilterOnOff {
  Bestseller = 'bestseller',
}

export enum FilterGroup {
  BrandName = 'brandName',
  Category = 'category',
  For = 'for',
}

export enum FilterMinMax {
  Price = 'price',
  AvailableAmount = 'availableAmount',
}

export type filterName = FilterGroup | FilterOnOff | FilterMinMax;
