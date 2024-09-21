import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Login Page</h2>
    <p>Login to access the dashboard.</p>
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  constructor(private authGuard: AuthGuard) {}

  login() {
    this.authGuard.login(); // Simulate login
  }
}
