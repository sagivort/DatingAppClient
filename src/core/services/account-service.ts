import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../types/user';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private http = inject(HttpClient);
  protected router = inject(Router);
  protected baseURL = 'http://localhost:5094/api/'
  currentUser = signal<User | null>(null);

  register(creds: any){
    return this.http.post<User>(this.baseURL + 'account/register', creds).pipe(
      tap(user => { 
        if (user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      }))
  }

  login(creds: any){
    return this.http.post<User>(this.baseURL + 'account/login', creds).pipe(
      tap(user => {
        if (user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
          this.router.navigateByUrl('/lists');
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
