import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router){}
  
  canActivate(){
    let role = localStorage.getItem("userType");

    if(role === "Admin"){
      return true
    } else{
      alert("You don't have admin rights!")
      this.router.navigate([''])
      return false
    }
  }
  
}
