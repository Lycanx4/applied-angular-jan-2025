import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { share } from 'rxjs';
import { FeatureDirective } from '@shared';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [NavigationComponent, RouterOutlet, FeatureDirective, RouterLink],
})
export class AppComponent {}
