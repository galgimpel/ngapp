import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  password: String = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.password === "tabitros") {
      this.router.navigate(['management']);
    } else {
      alert('wrong password, try again...');
    }
  }

  home() {
    this.router.navigate(['']);
  }

}
