import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperContainer } from './data/logos';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit, AfterViewInit {
  public swiperContainers = SwiperContainer;

  constructor() { }

  ngAfterViewInit (): void {
      const swiperLogos = new Swiper('.' + SwiperContainer.logos, {
          slidesPerView: 1,
          spaceBetween: 25,
          slidesOffsetBefore: 14,
          slidesOffsetAfter: 14,
          width: 120
      });
  }

  ngOnInit() {}
}
