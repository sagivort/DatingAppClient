import { Component, signal, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // ctor -- 1
  constructor() {}

  // Dependency Injection -- 2
  private http = inject(HttpClient);

  // -- 3
  ngOnInit(): void {
    this.http.get('http://localhost:5094/api/members').subscribe({
      next: members => console.log(members),
      error: err => console.log(err),
      complete: () => console.log('Request completed')
  });
  }

  protected readonly title = signal('DatingApp-Client');
  protected myname = 'John Doe';
  
}
