import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { canMatchFeature } from '@shared';

export const routes: Routes = [
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.routes').then((r) => r.RESOURCE_ROUTES),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },
  {
    path: 'golf',
    canMatch: [canMatchFeature('golf')],
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES), // dynamic import
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
];
