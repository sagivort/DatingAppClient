import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  protected accountService = inject(AccountService);

   protected creds: any = {  
    email: '',
    password: ''
  } 

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (response) => {
        console.log('login response', response);
      },
      error: (error) => {
        console.error('login error', error);    
    }
  }
  )}

  logout() {
    this.accountService.logout();
  }
}