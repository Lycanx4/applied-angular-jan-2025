import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadingStrategy extends PreloadingStrategy {
  override preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route['data'] && route.data['preload'] ? fn() : of(null);
  }
}
