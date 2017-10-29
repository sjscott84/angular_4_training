import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import Notices from './mock/notices';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    // return Notices;
    return this.http.get('http://localhost:3000/notices')
      .map(response => response.json())
  }
}
