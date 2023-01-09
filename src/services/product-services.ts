import { products } from '../data/product-data';
import { Product } from '@/interfaces/product';

export class ProductService {
  private static products: Product[] = products;

  static getAllProducts(): Product[] {
    return this.products;
  }

  static getProduct(field: Product['id'] | Product['productName']): Product | undefined {
    const convertField = decodeURIComponent(field.replace(/_/g, ' '));
    return this.products.find(({ id, productName }) => {
      const isTruly = id === convertField || productName === convertField;
      return isTruly;
    });
  }
}
