import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(
      private http: HttpClient
  ) { }

  getData(url) {
    return this.http.get(url);
  }
}
