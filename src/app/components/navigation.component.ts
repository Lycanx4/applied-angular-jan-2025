import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationListItemComponent } from './navigation-list-item.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, NgFor, NavigationListItemComponent],
  template: `
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <app-navigation-list-item
            tabindex="0"
            classNames="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          />
        </div>
        <a class="btn btn-ghost text-xl">Applied Angular</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <app-navigation-list-item classNames="menu menu-horizontal px-1" />
      </div>
      <!-- <div class="navbar-end">
        <a class="btn">Button</a>
      </div> -->
    </div>
  `,
  styles: ``,
})
export class NavigationComponent {
  links = signal([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Demos', path: '/demos' },
    { name: 'Golf', path: '/golf' },
    { name: 'Counter', path: '/counter' },
  ]);
}
