import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  constructor(
      private http: HttpClient
  ) { }

  getData(url): Observable<any> {
    return this.http.get<any>(url);
  }
}
