import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  curentUser = signal<string | null>(null);
  private localStorageService = inject(LocalStorageService);

  setUser() {
    const user = this.localStorageService.get<string>('user');

    if (user) {
      this.curentUser.set(user);
    }
  }
}
