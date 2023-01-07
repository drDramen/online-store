import { products } from '@/data/data';
import { Product } from '@/interfaces/product';

export class ProductService {
  static getAllProducts(): Product[] {
    return products;
  }

  static getProduct(field: Product['id'] | Product['productName']): Product | undefined {
    const convertField = decodeURIComponent(field.replace(/_/g, ' '));
    return this.getAllProducts().find(({ id, productName }) => {
      const isTruly = id === convertField || productName === convertField;
      return isTruly;
    });
  }
}
