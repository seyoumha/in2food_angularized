import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Angular2TokenService, RegisterData} from "angular2-token";
import {environment} from "../../environments/environment"
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService} from '../_services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData:RegisterData = <RegisterData>{}

  constructor(private authToken: Angular2TokenService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) {}
      
  onSubmit(){
    this.authToken.init(environment.token_auth_config)

    this.authToken.registerAccount(this.userData).subscribe(
       res=>{
         const json = res.json()
          console.log('response from server json', json)
          console.log('response from server json.data', json.data)
          this.authService.setCurrentUser(json.data)
          this.router.navigateByUrl('/');
       },
       err=>{
         localStorage.setItem('loggedIn', 'false')
       })
  }

  ngOnInit() {
  }

}
