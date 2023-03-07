import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getUserList(pageNum: number){
    return this.http.get(`https://reqres.in/api/users?page=${pageNum+1}`)
  }

  updateUser(userId: number, body: any){
    return this.http.put<any>(`https://reqres.in/api/users/${userId}`, body)
  }

  createUser(userInfo: any){
    return this.http.post<any>('https://reqres.in/api/users', {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      avatar: userInfo.avatar
    })
  }

  deleteUser(id: number){
    return this.http.delete(`https://reqres.in/api/users/${id}`)
  }
}
