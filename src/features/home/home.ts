import { Component, Input, input, signal } from '@angular/core';
import { Register } from "../account/register/register";
import { required } from '@angular/forms/signals';
import { User } from '../../types/user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  @Input({required: true}) membersFromApp : User[] = [];
  protected isShowRegister = signal(true);

  showRegister() {
    this.isShowRegister.set(true);
  }

  cancelRegister() {
    this.isShowRegister.set(false);
  }

}
