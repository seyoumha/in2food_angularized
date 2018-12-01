import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {Angular2TokenService} from 'angular2-token'
import {environment} from "../../environments/environment"
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthService{

  currentUser:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private authToken: Angular2TokenService, private route: ActivatedRoute,
        private router: Router) {}
  
  setCurrentUser(userData){
    this.currentUser.next(userData)
  }

  logout(){
    this.authToken.signOut().subscribe(
      res => {
        this.currentUser.next(null) 
        console.log("User logged out") 
        this.router.navigate(['/'])  
      },
      error => {
        console.log("Unable to logout form server")
      }
    )
    

  }
  

}