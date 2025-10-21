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

  onTextEntered(value: string) {
    this.todo = value;
  }

  onClick() {
    console.log(this.todo);
    this.todo = "";
  }
}
