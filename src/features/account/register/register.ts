import { Component, input, Input, output } from '@angular/core';
import { RegisterCreds, User } from '../../../types/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  membersFromHome = input.required<User[]>();
  cancelRegister = output<boolean>();

  protected creds = {} as RegisterCreds;

  cancel() {
    // Emit an event or call a method to notify the parent component to hide the register form
    this.cancelRegister.emit(true);
  }

}
