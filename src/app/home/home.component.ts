import { APIService } from '../shared/services/userAPI.service';
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
  users = []

  editModal = false
  userEditId : any = 0;

  constructor(private http: HttpClient, private router: Router,
    private confirmationService:ConfirmationService,
    private apiService: APIService){}

  ngOnInit(){
    this.fetchUsers(0)
  }

  fetchUsers(pageNum: number){
    this.apiService.getUserList(pageNum)
    .subscribe((response: any) => {
      this.users = response.data
    })
  }

  showUserInfo(user: any){
    this.router.navigateByUrl(`/${user.id}`)
  }

  editUser(editUser: any){
    const editUserIndex = this.users.findIndex(user => user.id === this.userEditId)
    this.apiService.updateUser(this.userEditId, editUser)
        .subscribe(Response => {console.log(Response)
          if(Response.firstName){
            this.users[editUserIndex].first_name = Response.firstName
          }

          if(Response.lastName){
            this.users[editUserIndex].last_name = Response.lastName
          }

          if(Response.email){
            this.users[editUserIndex].email = Response.email
          }

          if(Response.avatar){
            this.users[editUserIndex].avatar = Response.avatar
          }
          
        });
        this.editModal = false
  }

  deleteUser(id : number){
    this.confirmationService.confirm({
      message: `Do you want to delete user ID: ${id}?`,
      accept: () => {
        this.apiService.deleteUser(id)
        .subscribe(() => {
        this.users.splice(this.users.findIndex(user => user.id === id), 1)
        
        }) 
      }
  });
  }

  createUser(userInfo: any, form: any){
    this.apiService.createUser(userInfo)
    .subscribe((Response) => {
      this.users.push(Response)
      form.resetForm()
    })
  }

  editToggle(id: number){
    this.editModal = true
    this.userEditId = id
  }
}
