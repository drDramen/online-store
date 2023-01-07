import { NameRoute } from '@/enums/name-route';
import { Route } from '@/interfaces/route';
import { BaseComponent } from '@/templates/base-component';
import { routes } from './routes';

export class Router {
  static pageContainer: HTMLElement;
  private static crntRoute: Promise<BaseComponent> | void;
  private static routes: Route[] = routes;

  private static onPathChange: (
    route: Route,
    props: Record<string, string>,
  ) => Promise<BaseComponent> | void = (route, props) => {
    if (route) {
      return route.component(props).then((component) => {
        this.pageContainer.append(component.getNode());

        return component;
      });
    }
  };

  private static pathToRegex = (path: NameRoute) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '([^/]+)') + '$');

  private static getParams = (path: NameRoute, values: string[]) => {
    const keys = Array.from(path.matchAll(/:(\w+)/g)).map((result) => result[1]);

    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
  };

  private static defaultComponent = async (props: Record<string, string>) => {
    const { HomePage } = await import('@/components/pages/home-page/home-page');

    return new HomePage(props);
  };

  private static errorComponent = async (props: Record<string, string>) => {
    const { NotFound } = await import('../components/pages/404/not-found');

    return new NotFound(props);
  };

  static onPathChangeHandler = () => {
    const path = window.location.pathname;

    const route = this.routes.find((r) => this.pathToRegex(r.name).test(path));
    const props = Object.fromEntries(new URLSearchParams(location.search).entries());

    if (route) {
      const values = location.pathname.match(this.pathToRegex(route.name))?.slice(-1);
      if (values) {
        Object.assign(props, this.getParams(route.name, values));
      }
    }

    if (this.crntRoute) {
      this.crntRoute.then((component) => component.destroy());
    }

    this.crntRoute = this.onPathChange(
      route ??
        (path
          ? { name: NameRoute.NotFound, component: this.errorComponent }
          : { name: NameRoute.Default, component: this.defaultComponent }),
      props,
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
