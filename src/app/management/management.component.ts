import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  peoples: any = [];
  configUrl = 'assets/data.json';

  ngOnInit() {
    this.http.get('/users').subscribe(result => {
      debugger;
      this.peoples = result;
    })

  }

  save() {
    this.http.put('/users', this.peoples).subscribe(result => {

      this.router.navigate(['']);
    });
  }

}
