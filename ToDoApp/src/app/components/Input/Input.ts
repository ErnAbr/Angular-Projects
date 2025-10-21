import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './input.html',
  imports: [FormsModule],
})
export class Input {
  inputValue = '';

  readonly inputEmiter = output<string>();

  getInputValue() {
    this.inputEmiter.emit(this.inputValue);
  }
}
