import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { EntryData } from '../../types/EntryData';

@Component({
  selector: 'app-entry-form',
  imports: [ReactiveFormsModule],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.css',
})
export class EntryForm {
  protected submitted = false;
  private fb = inject(FormBuilder);
  protected loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      clientName: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  get clientName() {
    return this.loginForm.get('clientName');
  }
  get address() {
    return this.loginForm.get('address');
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    const data: EntryData = this.loginForm.value;
    console.log(data);
  }
}
