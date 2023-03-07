import { AuthService } from './shared/auth/auth.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig, private auth: AuthService) {}
  isLoggedIn(){
    return this.auth.isLoggedIn()
  }

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
  
}
