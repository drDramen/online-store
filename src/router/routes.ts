import { NameRoute } from '@/enums/name-route';
import { Route } from '@/interfaces/route';

export const routes: Route[] = [
  {
    name: NameRoute.Home,
    component: async (props) => {
      const { HomePage } = await import('@/components/pages/home-page/home-page');

      return new HomePage(props);
    },
  },
  {
    name: NameRoute.Cart,
    component: async (props) => {
      const { CartPage } = await import('@/components/pages/cart-page/cart-page');

      return new CartPage(props);
    },
  },
  {
    name: NameRoute.Catalog,
    component: async (props) => {
      const { CatalogPage } = await import('@/components/pages/catalog-page/catalog-page');

      return new CatalogPage(props);
    },
  },
  {
    name: NameRoute.Product,
    component: async (props) => {
      const { ProductPage } = await import('@/components/pages/product-page/product-page');

      return new ProductPage(props);
    },
  },
  {
    name: NameRoute.Brands,
    component: async (props: Record<string, string>) => {
      const { BrandsPage } = await import('@/components/pages/brands-page/brands-page');

      return new BrandsPage(props);
    },
  },
  {
    name: NameRoute.Favourites,
    component: async () => {
      const { FavouritesPage } = await import('@/components/pages/favourites-page/favourites-page');

      return new FavouritesPage();
    },
  },
];
