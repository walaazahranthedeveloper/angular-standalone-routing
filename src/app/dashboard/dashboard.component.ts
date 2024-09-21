import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Dashboard Page</h2>
    <p>Welcome to the Dashboard! Only accessible if logged in.</p>
    <a routerLink="/">Go to Home</a>
  `,
})
export class DashboardComponent {}
