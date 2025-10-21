import { Component } from '@angular/core';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

@Component({
  selector: 'app-root',
  templateUrl: './templates/main.html',
  imports: [Button, Input],
  standalone: true,
})
export class App {
  toDoList: string[] = [];

  onTextEntered(value: string) {
    console.log(value);
  }
}

