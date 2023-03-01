import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  users = []

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(){
    this.fetchUsers(1)
  }

  fetchUsers(pageNum: number){
    this.http.get(`https://reqres.in/api/users?page=${pageNum}`)
    .subscribe((response: any) => {
      this.users = response.data
    })
  }

  showUserInfo(user: any){
    this.router.navigateByUrl(`/${user.id}`)
  }

  editUser(){
    alert("User is about to be edited")
  }

  deleteUser(id: number){
    alert(`You are about to delete user with ID: ${id}`) 
  }
}
