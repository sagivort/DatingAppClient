import { Component, signal, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  private accountService = inject(AccountService);
  protected title = 'Dating App Client';
  protected members = signal<any>([]);

  // ctor -- 1
  constructor() {}

  // Dependency Injection -- 2
  private http = inject(HttpClient);

  // -- 3
  async ngOnInit(){
    this.members.set(await this.getMembers());
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5094/api/members'));
    } catch (err) {
      console.log(err);
      throw err;
    } 
  }

  
  
}
