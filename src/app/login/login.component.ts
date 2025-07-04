import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  username: string='';
  
  password: string = '';
constructor(private router: Router){}
  

 onLogin(): void {
  if (this.username ==='admin' && this.password==='admin') {
    localStorage.setItem('isLoggedIn','true')

    
    this.router.navigate(["products"])
    return;
  }
  else{
    this.errorMessage='Invalid Credentials'
  }
}
}
