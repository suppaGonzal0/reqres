import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email:string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem("token", "userIsLoggedIn")
      this.router.navigate([''])
    }, err => {
      alert(err.message)
      this.router.navigate(['login'])
    })
  }

  register(email:string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
        alert("Registration Successful")
        this.router.navigate(['login'])
    }, err => {
      alert(err.message)
      this.router.navigate(['register'])
    })
  }

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem("token")
      localStorage.removeItem("userType")
      this.router.navigate(['login'])
    }, err => {
      alert(err.message)
    })
  }

}
