import { Component, signal } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { EntryForm } from "../features/entry-form/entry-form";

@Component({
  selector: 'app-root',
  imports: [Nav, EntryForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
}
