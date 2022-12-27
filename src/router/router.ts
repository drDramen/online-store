import { NameRoute } from '@/enums/name-route';
import { Route } from '@/interfaces/route';
import { BaseComponent } from '@/templates/base-component';
import { routes } from './routes';

export class Router {
  static pageContainer: HTMLElement;
  private static crntRoute: Promise<BaseComponent> | void;
  private static routes: Route[] = routes;

  private static onPathChange: (route?: Route) => Promise<BaseComponent> | void = (route) => {
    if (route) {
      return route.component().then((component) => {
        this.pageContainer.append(component.getNode());

        return component;
      });
    }
  };

  private static defaultComponent: () => Promise<BaseComponent> = async () => {
    const { HomePage } = await import('@/components/pages/home-page/home-page');

    return new HomePage();
  };

  private static errorComponent: () => Promise<BaseComponent> = async () => {
    const { NotFound } = await import('../components/pages/404/not-found');

    return new NotFound();
  };

  static onPathChangeHandler = () => {
    const path = window.location.pathname;
    const route = this.routes.find((r) => r.name === path);

    if (this.crntRoute) {
      this.crntRoute.then((component) => component.destroy());
    }

    this.crntRoute = this.onPathChange(
      route ??
        (path
          ? { name: NameRoute.NotFound, component: this.errorComponent }
          : { name: NameRoute.Default, component: this.defaultComponent }),
    );
  };

  static init(pageContainer: HTMLElement) {
    this.pageContainer = pageContainer;
    window.addEventListener('popstate', this.onPathChangeHandler);
    this.onPathChangeHandler();
  }

  static destroy() {
    window.removeEventListener('popstate', this.onPathChangeHandler);
  }
}
