import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service'
import { User } from '../_models/user'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:User = null

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.user = user)
  }

  logout(){
    this.authService.logout()
  }

}
