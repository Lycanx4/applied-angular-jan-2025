import { Routes } from '@angular/router';
import { GolfComponent } from './golf.component';
import { GolfStore } from './services/golf.store';
import { GolfHoleComponent } from './golf-hole.component';
import { ScoreSheetComponent } from './score-sheet.component';
export const GOLF_ROUTES: Routes = [
  {
    path: '',
    providers: [GolfStore],
    component: GolfComponent,
    children: [
      {
        path: 'score-hole',
        component: GolfHoleComponent,
      },
      {
        path: 'score-sheet',
        component: ScoreSheetComponent,
      },
    ],
  },
];
