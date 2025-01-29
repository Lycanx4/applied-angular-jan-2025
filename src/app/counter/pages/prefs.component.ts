import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <button class="btn btn-primary mr-2" (click)="store.updateCountBy(1)">
      Count by 1
    </button>
    <button class="btn btn-secondary mr-2" (click)="store.updateCountBy(3)">
      Count by 3
    </button>
    <button class="btn btn-accent mr-2" (click)="store.updateCountBy(5)">
      Count by 5
    </button>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
