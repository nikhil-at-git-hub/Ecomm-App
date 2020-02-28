import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() public isUserLoggedIn: boolean;


  constructor(private as : AuthService) { }

  isOpen : boolean = false;

  toggelNavbar()
  {

    this.isOpen = !this.isOpen;
  }

  logout(){
   this.as.logout()
  }

  ngOnInit(): void {
  }

}
