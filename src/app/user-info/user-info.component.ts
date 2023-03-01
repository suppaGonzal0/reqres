import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  userID: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(){
    this.userID = this.route.snapshot.params['id']
    this.fetchUserInfo(this.userID)
  }

  private fetchUserInfo(id: any){
    this.http.get(`https://reqres.in/api/users/${id}`)
    .subscribe((response: any) => {console.log(response)})
  }
}
