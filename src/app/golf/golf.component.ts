import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-golf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex gap-4">
      <a class="link" routerLink="score-hole">Score a Hole</a>
      <a class="link" routerLink="score-sheet">See Your Score Sheet</a>
    </div>
    <div role="tablist" class="tabs tabs-lifted tabs-lg">
      <a role="tab" class="tab">Large</a>
      <a role="tab" class="tab tab-active">Large</a>
      <a role="tab" class="tab">Large</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class GolfComponent {}
