import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {
  title = 'app';

  constructor (
      private api: ApiService
  ) {}
}
