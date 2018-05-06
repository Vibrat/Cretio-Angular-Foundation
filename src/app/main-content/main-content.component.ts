import { Component, OnInit } from '@angular/core';
import { News, Test, Api } from './data/news';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import 'swiper';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})

export class MainContentComponent implements OnInit {
  private api = Api;
  public newses: News[];
  public data: Test;

  constructor(
      private http: HttpClient,
      private apiService: ApiService
  ) { }

  showData() {
        this.apiService.getData(this.api.projectApi)
            .subscribe((data: Test) => this.data = data);
      this.apiService.getData(this.api.postApi)
          .subscribe((data: News[]) => this.newses = data);
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
