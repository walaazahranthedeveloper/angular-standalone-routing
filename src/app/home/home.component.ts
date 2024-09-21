import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Home Page</h2>
    <p>Welcome to the Home Page!</p>
    <a routerLink="/about">Go to About</a>
  `,
})
export class HomeComponent {}
