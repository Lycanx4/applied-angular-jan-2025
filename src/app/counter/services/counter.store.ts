import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
const initialCount = parseInt(localStorage.getItem('count') || '0');
const initialCountBy = parseInt(localStorage.getItem('countBy') || '1');
export const CounterStore = signalStore(
  withState({
    count: initialCount,
    countBy: initialCountBy,
  }),
  withMethods((store) => {
    return {
      addCount: () => {
        patchState(store, { count: store.count() + store.countBy() });
        localStorage.setItem('count', store.count().toString());
      },
      minusCount: () => {
        patchState(store, { count: store.count() - store.countBy() });
        localStorage.setItem('count', store.count().toString());
      },
      updateCountBy: (countBy: number) => {
        patchState(store, { countBy });
        localStorage.setItem('countBy', countBy.toString());
      },
    };
  }),
  withComputed((store) => {
    return {
      removeCounterDisabled: computed(
        () => store.count() === 0 || store.count() < store.countBy(),
      ),
      fizzBuzz: computed(() => {
        if (store.count() === 0) {
          return '';
        }
        if (store.count() % 15 === 0) {
          return 'FizzBuzz';
        } else if (store.count() % 3 === 0) {
          return 'Fizz';
        } else if (store.count() % 5 === 0) {
          return 'Buzz';
        } else {
          return '';
        }
      }),
    };
  }),
);
