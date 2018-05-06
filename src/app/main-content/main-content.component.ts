import { Component, OnInit } from '@angular/core';
import { News, Test } from './data/news';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'swiper';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})

export class MainContentComponent implements OnInit {
  public news = News;
  public data: Test;

  constructor(
      private api: ApiService,
      private http: HttpClient,
      private apiService: ApiService
  ) { }

  showData() {
        this.apiService.getApi()
            .subscribe((data: Test) => this.data = {
                id: data.id,
                title: data.title,
                userID: data.userID,
                body: data.body
            });
  }

  ngOnInit() {
      this.showData();

      interface HTMLInputEvent extends Event {
          target: HTMLInputElement & EventTarget;
      }

      // Running Swiper for website
      const swiperNews = new Swiper('.swiper-container-1');

      const swiper = new Swiper('.swiper-container', {
          simulateTouch: false,
      });

      const spans = Array.from(document.querySelectorAll('.word span'));
      spans.forEach((span, idx) => {
          span.addEventListener('click', (e) => {
              (<HTMLInputEvent>e).target.classList.add('active');
          });
          span.addEventListener('animationend', (e) => {
              (<HTMLInputEvent>e).target.classList.remove('active');
          });

          // Initial animation
          setTimeout(() => {
              span.classList.add('active');
          }, 750 * (idx + 1));
      });

      let titles = Array.from(document.querySelectorAll('.container .title'));

      const containers = Array.from(document.querySelectorAll('.swiper-wrapper .swiper-slide .container'));

      let calulator = 1;

      containers.forEach((container, inx_co) => {
        titles = Array.from(container.querySelectorAll('.title'));
        titles.forEach((title, index) => {
              Array.from(title.querySelectorAll('span')).forEach((item , inx) => {
                  item.style.animationDelay = 4 * calulator + 's';
              });
            ++calulator;
        });

        setTimeout(function () {
            swiper.slideNext();
        }, calulator * 4000);
      });
  }


}

