import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-of-form',
  templateUrl: './result-of-form.component.html',
  styleUrls: ['./result-of-form.component.css']
})
export class ResultOfFormComponent implements OnInit {
  name: string;
  phone: string;
  email: string;
  password: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activateRoute.queryParams.subscribe((queryParams) => {
     this.name = queryParams['name'];
     this.phone = queryParams['phone'];
     this.email = queryParams['email'];
     this.password = queryParams['password'];
   });
  }

}
