import {AfterViewInit, Component, OnInit} from '@angular/core';
import { SwiperContainer } from './data/logos';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit, AfterViewInit {
  swiperContainers = SwiperContainer;

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

  ngOnInit() {
  }

}
