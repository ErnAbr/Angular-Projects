import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { EntryData } from '../../types/EntryData';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-entry-form',
  imports: [ReactiveFormsModule],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.css',
})
export class EntryForm {
  protected submitted = false;
  protected loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);

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
    this.accountService.setUser(data.clientName);
    this.loginForm.reset();
  }
}
