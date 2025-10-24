import { Component } from '@angular/core';
import { Button } from './components/Button/Button';
import { InputValue } from './components/Input/Input';
import { ListView } from './components/ListView/ListView';

@Component({
  selector: 'app-root',
  templateUrl: './templates/main.html',
  imports: [Button, InputValue, ListView],
})
export class App {
  todo = '';
  toDoList: string[] = [];

  onClick() {
    if (/^\s*$/.test(this.todo)) {
      console.warn('Cannot be empty');
      return;
    }
    this.toDoList.push(this.todo);
    this.todo = '';
  }

  onClickClear() {
    this.todo = '';
  }
}
