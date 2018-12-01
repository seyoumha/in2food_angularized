import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Angular2TokenService} from 'angular2-token'
import {environment} from "../../environments/environment"
import {User} from "../_models/user"
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService} from '../_services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User
  @Output() onFormResult = new EventEmitter<any>()

  constructor(private authToken: Angular2TokenService, private route: ActivatedRoute,
        private router: Router, private authService: AuthService) {}
      
  onSignInSubmit(){
    this.authToken.init(environment.token_auth_config)

    this.authToken.signIn(this.user).subscribe(
       res=>{
         const json = res.json()
          console.log('response from server json', json)
          console.log('response from server json.data', json.data)
          this.authService.setCurrentUser(json.data)
          this.router.navigateByUrl('favorite');
       },
       err=>{
         localStorage.setItem('loggedIn', 'false')
       })
  }

    ngOnInit() {
    }

}

