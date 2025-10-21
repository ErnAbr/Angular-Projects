import { Component } from '@angular/core';
import { Button } from './components/Button/Button';
import { InputValue } from './components/Input/Input';

@Component({
  selector: 'app-root',
  templateUrl: './templates/main.html',
  imports: [Button, InputValue],
  standalone: true,
})
export class App {
  todo = '';
  toDoList: string[] = [];

  onClick() {
    if (/^\s*$/.test(this.todo)) {
      console.warn('Cannot be empty');
      return;
    }
    console.log(this.todo);
    this.todo = '';
  }
}
