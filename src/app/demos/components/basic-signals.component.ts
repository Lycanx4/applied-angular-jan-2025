import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { AddAnimalComponent } from './add-animal.component';
import { AnimalListComponent } from './animal-list.component';
import { GolfScoreComponent } from './golf-score.component';

@Component({
  selector: 'app-basic-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GolfScoreComponent, AnimalListComponent, AddAnimalComponent],
  template: `
    <div>
      <p>
        You have {{ animalCount() }} Animals, and Your Score is
        {{ golfScore() }}
      </p>
    </div>

    <div>
      <h2 class="text-2xl">Golfing!</h2>
      <app-golf-score (golfScore)="updateGolfScore($event)" />

      <app-animal-list [list]="animals()" />
      <app-add-animal (animalAdded)="addAnimal($event)" />
    </div>
  `,
  styles: ``,
})
export class BasicSignalsComponent {
  animals = signal(['Bird', 'Goat', 'Deer']);
  animalCount = computed(() => this.animals().length);
  addAnimal(animalName: string) {
    this.animals.update((currentAnimals) => [animalName, ...currentAnimals]);
  }
  golfScore = signal(0);
  updateGolfScore(score: number) {
    this.golfScore.set(score);
  }
}
