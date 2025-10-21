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
  result = '';
  toDoList: string[] = [];

  getDataFromChild(item: string) {
    this.result = item;
  }

  onSubmit() {
    console.log(this.result);
  }
}

// <input type="text" [(ngModel)]="inputValue" />
