import { CheckRoleService } from './check-role.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  display: boolean = false
  role: any = localStorage.getItem("userType")

  constructor(private checkRoleService: CheckRoleService){}

  isAdmin(){
    return this.checkRoleService.adminCheck()
    // return (this.role === "admin") ? true : false
  }

  isAdminOrPro(){
    return this.checkRoleService.adminOrProCheck()
  }
}
