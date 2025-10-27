import { Component, inject, OnInit } from '@angular/core';
import { Button } from './components/Button/Button';
import { InputValue } from './components/Input/Input';
import { ListView } from './components/ListView/ListView';
import { LocalStorageService } from './services/LocalStorageService';

@Component({
  selector: 'app-root',
  templateUrl: './templates/main.html',
  imports: [Button, InputValue, ListView],
})
export class App {
  private readonly localStorageService = inject(LocalStorageService);

  todo = '';
  toDoList: string[] = this.localStorageService.get('todoKey') || [];
  isCompleted: boolean[] = this.localStorageService.get('isCompletedKey') || [];

  onClick() {
    if (/^\s*$/.test(this.todo)) {
      console.warn('Cannot be empty');
      return;
    }
    this.toDoList.push(this.todo);

    this.todo = '';
    this.localStorageService.set('todoKey', this.toDoList);
  }

  onClickClear() {
    // this.todo = '';
    this.toDoList = [];
    this.isCompleted = [];
    this.localStorageService.clear();
  }
}
