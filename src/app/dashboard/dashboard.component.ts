import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  timer: any = 0;
  delay = 200;
  prevent = false;

  counter: number = 0;

  manager() {

    this.counter++;

    let self = this;

    this.timer = setTimeout(function () {
      debugger;
      self.func(self.timer);


    }, 2000);


  }

  func(timerNumber: number) {

    clearTimeout(timerNumber);

    if (this.counter > 2) {
      this.router.navigate(['auth']);
    } else {
      this.counter = 0;
    }
  }

}
