import { Component, Input } from '@angular/core';
import { Button } from '../Button/Button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'list-view',
  templateUrl: './listView.html',
  imports: [Button, NgClass],
})
export class ListView {
  @Input() toDoList: string[] = [];
  isCompleted: boolean[] = [];

  deleteItem(index: number) {
    this.toDoList.splice(index, 1);
  }

  completeTask(index: number) {
    if (this.isCompleted[index] == true) {
      this.isCompleted[index] = false;
    } else {
      this.isCompleted[index] = true;
    }
  }
}

//line-through
