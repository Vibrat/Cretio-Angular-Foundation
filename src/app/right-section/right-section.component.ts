import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperContainer } from './data/data';
import 'swiper';


@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit, AfterViewInit {
    public  swiperContainers = SwiperContainer;

  constructor(){ }

  showData(): void {}

  ngAfterViewInit() {
      setTimeout (function () {
          const swiperPort = new Swiper('.' + SwiperContainer.portfolio, {
              slidesPerView: 1,
              spaceBetween: 15,
              slidesOffsetBefore: 14,
              slidesOffsetAfter: 14,
              width: 300
          });
      }, 500);
  }

  ngOnInit() {
    this.showData();
  }

}
