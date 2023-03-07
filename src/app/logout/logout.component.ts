import { FirebaseService } from '../shared/services/firebase.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private firebaseService: FirebaseService){}

  logout(){
    this.firebaseService.logout()
  }
}
