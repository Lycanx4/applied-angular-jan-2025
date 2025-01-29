import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
  template: `
    <div *ngFor="let animal of uniqueListWithCount(); let i = index">
      |<span *ngFor="let _ of [].constructor(animal.count); let i = index">
        <u>{{ animal.animal }}</u> </span
      >| Count: {{ animal.count }}
    </div>
  `,
  styles: ``,
})
export class AnimalListComponent {
  // animals = signal(['dog', 'cat', 'mouse']);

  list = input.required<string[]>();
  uniqueListWithCount() {
    const countMap = new Map<string, number>();
    this.list().forEach((animal) => {
      countMap.set(animal, (countMap.get(animal) || 0) + 1);
    });
    return Array.from(countMap.entries()).map(([animal, count]) => ({
      animal,
      count,
    }));
  }
}
