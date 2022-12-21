export interface Product {
  id: string;
  brandName: string;
  productName: string;
  description: string;
  ingredients: string;
  starIngredient: string;
  pics: string[];
  price: number;
  bestseller: boolean;
  segment: string;
  category: string;
  for: string;
  availableAmount: number;
}
