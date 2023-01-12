import { products } from '../data/product-data';
import { Product } from '@/interfaces/product';

export class ProductService {
  private static readonly allProducts: Product[] = products;
  private static currentProducts: Product[] = products;

  static getAllProducts(): Product[] {
    return this.allProducts;
  }

  static getCurrentProducts(): Product[] {
    return this.currentProducts;
  }

  static setCurrentProducts(products: Product[]) {
    this.currentProducts = products;
  }

  static getProduct(field: Product['id'] | Product['productName']): Product | undefined {
    const convertField = decodeURIComponent(field.replace(/_/g, ' '));
    return this.allProducts.find(({ id, productName }) => {
      const isTruly = id === convertField || productName === convertField;
      return isTruly;
    });
  }
}
