import { Component } from '@angular/core';
import { Button } from './components/Button/Button';

@Component({
  selector: 'app-root',
  templateUrl: './templates/main.html',
  imports: [Button],
  standalone: true,
})
export class App {
  name = 'Ernestas';
}
