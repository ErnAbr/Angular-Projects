import { Component, inject } from '@angular/core';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routeLinks } from '../../app/routes';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected routerLinks = routeLinks;
  protected accountService = inject(AccountService);
  protected router = inject(Router);
}
