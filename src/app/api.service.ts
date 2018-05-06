import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Test } from './main-content/data/news';

@Injectable()
export class ApiService {
  private heroesUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(
      private http: HttpClient
  ) { }

  getApi(){
    return this.http.get<Test>(this.heroesUrl);
  }
}
