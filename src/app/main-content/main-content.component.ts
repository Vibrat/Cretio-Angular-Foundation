import { AfterViewInit, Component, OnInit} from '@angular/core';
import { SwiperContainer } from './data/main-content';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})

export class MainContentComponent implements OnInit, AfterViewInit {
    public swiperContainers = SwiperContainer;

    constructor() { }

    ngAfterViewInit (): void {
        setTimeout (function () {
            const swiperLogos = new Swiper('.' + SwiperContainer.logos, {
                slidesPerView: 1,
                spaceBetween: 25,
                slidesOffsetBefore: 14,
                slidesOffsetAfter: 14,
                width: 120
            });
        }, 500);
    }


    ngOnInit() {}
}