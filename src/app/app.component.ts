import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/dashboard">Dashboard</a> |
      <a routerLink="/login">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}