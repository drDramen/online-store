import { Product } from './../interfaces/product';

import yttpSuperfoodCleanser_1 from './assets/images/product_images/yttp/yttp_SuperfoodCleanser.jpg';
import yttpSuperfoodCleanser_2 from './assets/images/product_images/yttp/yttp_SuperfoodCleanser_3.jpg';

export const products: Product[] = [
    {
      id: 1,
      brand_name: 'Youth to the People',
      product_name: 'Superfood Cleanser',
      description: `The daily green juice cleanse for your face.
      The powerful, but gentle daily face wash is formulated 
      with superfood antioxidants from kale, spinach, and green tea
       - to give your skin the ultimate cleanse. It works effectively
        to prevent buildup in pores, remove makeup, 
      and balance pH without drying or stripping. 
      This is the green juice cleanse for your face.`,
      ingredients: `Water/Aqua/Eau , Cocamidopropyl Hydroxysultaine ,
       Sodium Cocoyl Glutamate , Sorbeth-230 Tetraoleate , 
       Polysorbate 20 , Sodium Chloride , Aloe Barbadensis 
       Leaf (Aloe Vera) Juice Powder , Brassica Oleracea Acephala 
       (Kale) Leaf Extract , Spinacia Oleracea (Spinach) Leaf Extract , 
       Camellia Sinensis (Green Tea) Leaf Extract , Medicago Sativa 
       (Alfalfa) Extract , Chamomilla Recutita (Matricaria) Flower 
       Extract , Tetrahexyldecyl Ascorbate (Vitamin C) , Glycerin , 
       Panthenol (Vitamin B5) , Tocopheryl Acetate (Vitamin E) ,
        Decyl Glucoside , Sorbitan Laurate , Tetrasodium Glutamate 
        Diacetate , Gluconolactone , Ethylhexylglycerin , Maltodextrin , 
        Citric Acid , Phenoxyethanol , Potassium Sorbate , 
        Sodium Benzoate , Gardenia Jasminoides (Jasmine) Fruit Extract , 
        Fragrance/Parfum , Sodium Hydroxide , Sodium Glycolate , 
        Sodium Formate , Hexyl Cinnamal , Linalool , Limonene , 
        Chlorophyllin-Copper Complex (CI 75810)`,
      star_ingredient: 'Vitamin C',
      pic_1: yttpSuperfoodCleanser_1,
      pic_2: yttpSuperfoodCleanser_2,
      price: 36,
      bestseller: true,
      segment: 'USA / Canada',
      category: 'Cleanser',
      for: 'Face',
      available_amount: 200,
    },
  ]