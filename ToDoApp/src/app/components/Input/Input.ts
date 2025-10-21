import { Component, model } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './input.html',
  imports: [],
})
export class InputValue {
  value = model<string>('');

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value.set(inputValue);
  }
}
