import { RouteI } from '../interfaces/route-i';


export class RouteM implements RouteI {
  route: string;
  label: string;

  // Partial permet de passer un objet qui répond partiellement à la classe Client
  constructor(route?: Partial<RouteM>) {
    if (route) {
      Object.assign(this, route);
    }

  }

}
