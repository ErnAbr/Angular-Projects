import { Component, inject } from '@angular/core';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
}
