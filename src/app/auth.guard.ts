import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // For simplicity, we’ll just simulate the authentication status
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);  // Redirect to login page if not authenticated
      return false;
    }
  }

  // Method to simulate login (can be used in login component)
  login() {
    this.isAuthenticated = true;
  }

  // Method to simulate logout
  logout() {
    this.isAuthenticated = false;
  }
}
