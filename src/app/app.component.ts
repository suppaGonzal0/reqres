import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users = []

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(){
    this.fetchPage01()
  }

  fetchPage01(){
    this.http.get('https://reqres.in/api/users?page=1')
    .subscribe((response: any) => {
      this.users = response.data
    })
  }

  fetchPage02(){
    this.http.get('https://reqres.in/api/users?page=2')
    .subscribe((response: any) => {
      this.users = response.data
    })
  }

  showUserInfo(user: any){
    console.log(user.id)
  }
}
