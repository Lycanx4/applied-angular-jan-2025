import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-golf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div role="tablist" class="tabs tabs-lifted tabs-lg">
      <a
        role="tab"
        class="tab"
        [class.tab-active]="activeTab === 'SH'"
        (click)="setActiveTab('SH')"
        routerLink="score-hole"
        >Score a Hole</a
      >
      <a
        role="tab"
        class="tab"
        [class.tab-active]="activeTab === 'SS'"
        (click)="setActiveTab('SS')"
        routerLink="score-sheet"
        >See Your Score Sheet</a
      >
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class GolfComponent {
  activeTab: string = '';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
