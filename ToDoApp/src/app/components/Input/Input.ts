import { Component, model } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './input.html',
  imports: [],
})
export class InputValue {
  value = model<string>('');

  onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
