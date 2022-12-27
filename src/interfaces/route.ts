import { NameRoute } from '@/enums/name-route';
import { BaseComponent } from '@/templates/base-component';

export interface Route {
  name: NameRoute;
  component: () => Promise<BaseComponent>;
}
