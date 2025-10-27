import { Component, inject, Input } from '@angular/core';
import { Button } from '../Button/Button';
import { NgClass } from '@angular/common';
import { LocalStorageService } from '../../services/LocalStorageService';

@Component({
  selector: 'list-view',
  templateUrl: './listView.html',
  imports: [Button, NgClass],
})
export class ListView {
  private readonly localStorageService = inject(LocalStorageService);

  @Input() toDoList: string[] = [];
  @Input() isCompleted: boolean[] = [];

  deleteItem(index: number) {
    this.toDoList.splice(index, 1);
    this.isCompleted.splice(index, 1);

    this.localStorageService.set('todoKey', this.toDoList);
    this.localStorageService.set('isCompletedKey', this.isCompleted);
  }

  completeTask(index: number) {
    if (this.isCompleted[index] == true) {
      this.isCompleted[index] = false;
    } else {
      this.isCompleted[index] = true;
    }

    this.localStorageService.set('isCompletedKey', this.isCompleted);
  }
}
