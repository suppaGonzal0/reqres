import { FirebaseService } from '../shared/services/firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private firebaseService: FirebaseService){}

  registerUser(registerUser: any){
    // console.log(typeof registerUser)
    this.firebaseService.register(registerUser.email, registerUser.password)
  }
}
