import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

   protected creds: any = {  
    email: '',
    password: ''
  }

  login() {
    console.log('login', this.creds);
  }

}
