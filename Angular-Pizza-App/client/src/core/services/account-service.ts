import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  currentUser = signal<string | null>(null);

  setUser(username: string) {
    localStorage.setItem('user', username);
    this.currentUser.set(username);
  }

  loadUser() {
    const user = localStorage.getItem('user');
    if (user) this.currentUser.set(user);
  }

  clearUser() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
