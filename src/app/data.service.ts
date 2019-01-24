import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://5043298c.ngrok.io/api/users';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  postData(param) {
    return this.httpClient.post(this.url, param);
}
}
