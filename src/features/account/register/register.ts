import { Component, inject, input, Input, output } from '@angular/core';
import { RegisterCreds, User } from '../../../types/user';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  accountService = inject(AccountService);
  membersFromHome = input.required<User[]>();
  cancelRegister = output<boolean>();

  protected creds = {} as RegisterCreds;

  register() {
    // Emit an event or call a method to notify the parent component to show the register form
    this.accountService.register(this.creds).subscribe({
      next: (response) => {
        console.log('register response', response);   
        this.cancelRegister.emit(true);
      },
      error: (error) => {
        console.error('register error', error);    
      }});
  }
  
  cancel() {
    // Emit an event or call a method to notify the parent component to hide the register form
    this.cancelRegister.emit(true);
  }

}
