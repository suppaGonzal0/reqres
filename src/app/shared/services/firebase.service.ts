import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    fireauth.authState.subscribe((userData) => {
      if(userData){
        localStorage.setItem("user", JSON.stringify(userData));
        JSON.parse(localStorage.getItem("user")!);
      }
    })
   }

  login(email:string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
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
      localStorage.removeItem("user")
      localStorage.removeItem("userType")
      this.router.navigate(['login'])
    }, err => {
      alert(err.message)
    })
  }

  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(Response => {
      localStorage.setItem("userType", "Pro User")
      this.router.navigate([''])
      console.log(Response.user.email)
    }, error => {
      alert(error.message)
    })
  }

}
