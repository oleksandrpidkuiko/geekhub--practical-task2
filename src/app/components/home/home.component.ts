import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result;
  simpleObj = {
    name: 'test-name3',
    phone: '07111111112',
    email: 'test-email3@yopmail.com',
    password: 'test-pass'
  };
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe((data) => this.result = data);
    this.dataService.postData(this.simpleObj).subscribe((res) => console.log(213123, res));
  }
}
