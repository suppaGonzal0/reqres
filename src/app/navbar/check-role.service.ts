import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleService {

  constructor() { }

  adminCheck(){
    let role = localStorage.getItem("userType")
    return (role === "Admin") ? true : false
  }

  adminOrProCheck(){
    let role = localStorage.getItem("userType")
    return (role === "Admin" || role === "Pro User") ? true : false
  }
}
