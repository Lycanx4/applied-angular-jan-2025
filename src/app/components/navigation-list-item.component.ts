import { NgFor } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, RouterLink, RouterLinkActive],
  template: `
    <ul class="{{ classNames() }}">
      <li *ngFor="let link of links()">
        <a routerLinkActive="active" [routerLink]="[link.path]">
          {{ link.name }}
        </a>
      </li>
    </ul>
  `,
  styles: ``,
})
export class NavigationListItemComponent {
  classNames = input.required<string>();
  links = signal([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Demos', path: '/demos' },
    { name: 'Golf', path: '/golf', feature: 'golf' },
    { name: 'Counter', path: '/counter' },
  ]);
}
