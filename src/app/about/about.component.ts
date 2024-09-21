import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>About Page</h2>
    <p>This is the about page of our multi-page app.</p>
    <a routerLink="/">Go to Home</a>
  `,
})
export class AboutComponent {}
