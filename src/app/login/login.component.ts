import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private firebaseService: FirebaseService){}

  wrongCreds : boolean = false

  loginUser(loginUser: any){
    this.firebaseService.login(loginUser.email, loginUser.password)
    if(loginUser.email === 'admin@gmail.com'){
      localStorage.setItem("userType", "Admin")
    } else if(loginUser.email === 'user@gmail.com'){
      localStorage.setItem("userType", "Regular User")
    } else if(loginUser.email === 'pro@gmail.com'){
      localStorage.setItem("userType", "Pro User")
    } else{
      this.wrongCreds = true
    }
  }
}
