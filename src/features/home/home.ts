import { Component, inject, Input, input, signal } from '@angular/core';
import { Register } from "../account/register/register";
import { required } from '@angular/forms/signals';
import { User } from '../../types/user';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  accountService = inject(AccountService);
  @Input({required: true}) membersFromApp : User[] = [];
  protected isShowRegister = signal(true);

  showRegister() {
    this.isShowRegister.set(true);
  }

  cancelRegister() {
    this.isShowRegister.set(false);
  }

}
