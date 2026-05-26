import { Component, inject, OnInit } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { EntryForm } from '../features/entry-form/entry-form';
import { AccountService } from '../core/services/account-service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, EntryForm, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected accountService = inject(AccountService);

  ngOnInit(): void {
    this.accountService.loadUser();
  }
}
