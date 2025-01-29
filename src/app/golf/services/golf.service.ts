import { signal } from '@angular/core';

export class GolfService {
  #score = signal(0);

  getScore() {
    return this.#score.asReadonly;
  }

  takeAStroke() {
    this.#score.update((s) => s + 1);
  }

  removeStroke() {
    this.#score.update((s) => s - 1);
  }
}
