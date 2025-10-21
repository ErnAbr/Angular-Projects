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
  todo = '';
  toDoList: string[] = [];

  onTextEntered(value: string) {
    this.todo = value;
    // console.log(value);
  }

  onClick() {
    console.log(this.todo);
  }
}
