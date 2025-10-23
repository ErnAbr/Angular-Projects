import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list-view',
  templateUrl: './listView.html',
})
export class ListView implements OnChanges {
  @Input() toDoList: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['toDoList']);
  }
}
