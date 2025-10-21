import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './input.html',
  imports: [FormsModule],
})
export class Input {
  @Output() inputText = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputText.emit(value);
  }
}
