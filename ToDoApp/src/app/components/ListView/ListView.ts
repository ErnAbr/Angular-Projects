import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-view',
  templateUrl: './listView.html',
  imports: [],
})
export class ListView {
  @Input() toDoList: string[] = [];
}
