import { AfterViewInit, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

import { News, Test, Api, SwiperContainer } from './data/news';
import 'swiper';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})

export class MainContentComponent implements OnInit, AfterViewInit {
    private api = Api;
    public allNews: News[];
    public data: Test;
    public swiperContainers = SwiperContainer;
    private calculator = 1;

    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { }

    showData() {
        this.apiService.getData(this.api.projectApi)
            .subscribe((data: Test) => this.data = data);
        this.apiService.getData(this.api.postApi)
            .subscribe((data: News[]) => this.allNews = data);
    }


    ngAfterViewInit (): void {
        setTimeout (function () {
            const swiperNews = new Swiper('.' + SwiperContainer.newsContainer);
            const swiperPort = new Swiper('.' + SwiperContainer.portfolio, {
                slidesPerView: 1,
                spaceBetween: 15,
                slidesOffsetBefore: 14,
                slidesOffsetAfter: 14,
                width: 300
            });
            const swiperLogos = new Swiper('.' + SwiperContainer.logos, {
                slidesPerView: 1,
                spaceBetween: 25,
                slidesOffsetBefore: 14,
                slidesOffsetAfter: 14,
                width: 120
            });
        }, 500);

        interface HTMLInputEvent extends Event {
            target: HTMLInputElement & EventTarget;
        }

        const swiper = new Swiper('.' + SwiperContainer.mainContainer, {
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

        containers.forEach((container, inx_co) => {
            titles = Array.from(container.querySelectorAll('.title'));
            titles.forEach((title, index) => {
                Array.from(title.querySelectorAll('span')).forEach((item , inx) => {
                    item.style.animationDelay = 4 * this.calculator + 's';
                });
                ++this.calculator;
            });

            setTimeout(function () {
                swiper.slideNext();
            }, this.calculator * 4000);
        });
    }


    ngOnInit() {
        this.showData();
    }
}