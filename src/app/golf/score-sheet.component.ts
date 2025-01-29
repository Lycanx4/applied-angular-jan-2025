import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GolfStore } from './services/golf.store';

@Component({
  selector: 'app-score-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Your current score is {{ store.score() }}</p> `,
  styles: ``,
})
export class ScoreSheetComponent {
  store = inject(GolfStore);
}
