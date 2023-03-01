import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  userDetails: any = []

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router){}

  ngOnInit(){
    this.fetchUserInfo(this.route.snapshot.params['id'])
  }

  private fetchUserInfo(id: number){
    this.http.get(`https://reqres.in/api/users/${id}`)
    .subscribe((response: any) => {
      this.userDetails = response.data
    })
  }

  goHome(){
    this.router.navigateByUrl("")
  }
}
