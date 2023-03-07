import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(){
    let role = localStorage.getItem("userType");

    if(role === "Admin" || role === "Pro User"){
      return true
    } else{
      alert("This page is not accessible by regular users!")
      this.router.navigate([''])
      return false
    }
  }
  
}
