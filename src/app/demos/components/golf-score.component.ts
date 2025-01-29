import {
  Component,
  ChangeDetectionStrategy,
  signal,
  output,
} from '@angular/core';

@Component({
  selector: 'app-golf-score',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>
      Your Current Score:
      <span>{{ currentScore() }}</span>
    </p>

    <div>
      <button (click)="addStroke()" class="btn btn-primary">Took A Shot</button>
    </div>
  `,
  styles: ``,
})
export class GolfScoreComponent {
  currentScore = signal(0); // state
  golfScore = output<number>();
  addStroke() {
    // this.currentScore.set(this.currentScore() + 1); // changeable
    this.currentScore.update((c) => c + 1);
    this.golfScore.emit(this.currentScore());
    // hey, update the dom wherever the currentScore is shown now.
  }
}
