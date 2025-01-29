import {
  ChangeDetectionStrategy,
  Component,
  computed,
  resource,
} from '@angular/core';
import { StatusBarComponent } from './components/status-bar.component';

@Component({
  selector: 'app-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatusBarComponent],
  template: `
    @if (newsItems.isLoading()) {
      <div role="alert" class="alert alert-success">
        <span class="loading loading-spinner text-accent"></span>
        <span>Loading your news! It'll be worth it!</span>
      </div>
    } @else {
      <div class="flex flex-col gap-8">
        @for (item of newsItems.value(); track item.id) {
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="card-actions justify-end">
                <a
                  href="{{ item.link }}"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ item.title }}</a
                >
              </div>
            </div>
          </div>
        }
      </div>

      <app-status-bar [totalNewsItems]="totalNewsItems()" />
    }
  `,
  styles: ``,
})
export class ResourcesComponent {
  newsItems = resource({
    loader: () =>
      fetch('https://prod32.hypertheory.com/api/news').then((r) => r.json()),
  });

  totalNewsItems = computed(() => this.newsItems.value().length);
}
