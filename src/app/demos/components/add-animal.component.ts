import {
  Component,
  ChangeDetectionStrategy,
  output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-animal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <p>Warning - bad code for a11y. don't judge. we'll cover that later.</p>

      <input
        #newAnimalInput
        type="text"
        class="input input-sm input-bordered"
      />
      <button
        (click)="addAnimal(newAnimalInput.value)"
        class="btn btn-secondary"
      >
        Add Animal
      </button>
    </div>
  `,
  styles: ``,
})
export class AddAnimalComponent {
  animalAdded = output<string>();
  @ViewChild('newAnimalInput') newAnimalInput!: ElementRef;
  addAnimal(animalName: string) {
    // this.animals?
    // after I've validated all I can.
    if (animalName.trim()) {
      this.animalAdded.emit(
        this.getAnimalEmoji(animalName.trim().toLowerCase()),
      );
      this.newAnimalInput.nativeElement.value = ''; // Clear the input field
    } else {
      alert('Please enter a valid animal name');
    }
  }
  getAnimalEmoji(animalName: string): string {
    switch (animalName) {
      case 'bird':
        return '🐦';
      case 'goat':
        return '🐐';
      case 'deer':
        return '🦌';
      case 'cat':
        return '🐱';
      case 'dog':
        return '🐶';
      case 'cow':
        return '🐄';
      case 'horse':
        return '🐴';
      case 'sheep':
        return '🐑';
      case 'pig':
        return '🐖';
      case 'chicken':
        return '🐔';
      case 'duck':
        return '🦆';
      case 'turkey':
        return '🦃';
      case 'rabbit':
        return '🐇';
      case 'frog':
        return '🐸';
      case 'penguin':
        return '🐧';
      case 'koala':
        return '🐨';
      case 'panda':
        return '🐼';
      case 'bear':
        return '🐻';
      case 'monkey':
        return '🐒';
      case 'elephant':
        return '🐘';
      case 'tiger':
        return '🐅';
      case 'lion':
        return '🦁';
      case 'fish':
        return '🐟';
      default:
        return animalName; // Return the original name if no emoji is found
    }
  }
}
