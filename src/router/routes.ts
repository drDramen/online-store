import { NameRoute } from '@/enums/name-route';
import { Route } from '@/interfaces/route';

export const routes: Route[] = [
  {
    name: NameRoute.Home,
    component: async () => {
      const { HomePage } = await import('@/components/pages/home-page/home-page');

      return new HomePage();
    },
  },
  {
    name: NameRoute.Cart,
    component: async () => {
      const { CartPage } = await import('@/components/pages/cart-page/cart-page');

      return new CartPage();
    },
  },
  {
    name: NameRoute.Catalog,
    component: async () => {
      const { CatalogPage } = await import('@/components/pages/catalog-page/catalog-page');

      return new CatalogPage();
    },
  },
  {
    name: NameRoute.Product,
    component: async () => {
      const { ProductPage } = await import('@/components/pages/product-page/product-page');

      return new ProductPage();
    },
  },
  {
    name: NameRoute.Brands,
    component: async () => {
      const { BrandsPage } = await import('@/components/pages/brands-page/brands-page');

      return new BrandsPage();
    },
  },
];
