import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  users = [{
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  }]

  editModal = false
  userEditId : any = 0;

  constructor(private http: HttpClient, private router: Router,
    private confirmationService:ConfirmationService){}

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

  editUser(editUser: any){
    const editUserIndex = this.users.findIndex(user => user.id === this.userEditId)
    this.http.put<any>(`https://reqres.in/api/users/${this.userEditId}`, editUser)
        .subscribe(Response => {console.log(Response)
          this.users[editUserIndex].first_name = Response.firstName
          this.users[editUserIndex].last_name = Response.lastName
          this.users[editUserIndex].email = Response.email
          this.users[editUserIndex].avatar = Response.avatar
        });
        this.editModal = false
  }

  deleteUser(id : any){
    this.confirmationService.confirm({
      message: `Do you want to delete user ID: ${id}?`,
      accept: () => {
        this.http.delete(`https://reqres.in/api/users/${id}`)
        .subscribe(() => {
        this.users.splice(this.users.findIndex(user => user.id === id), 1)
        
        }) 
      }
  });
  }

  createUser(userInfo: any, form: any){
    this.http.post<any>('https://reqres.in/api/users', {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      avatar: userInfo.avatar
    }).subscribe((Response) => {
      this.users.push(Response)
      form.resetForm()
    })
  }

  editToggle(id: number){
    this.editModal = true
    this.userEditId = id
  }

}
