import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

import { Test, Api, SwiperContainer } from './data/data';
import 'swiper';


@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit, AfterViewInit {
    private api = Api;
    public  data: Test;
    public  swiperContainers = SwiperContainer;

  constructor(
      private http: HttpClient,
      private apiService: ApiService
  ){ }

  showData(): void {
        this.apiService.getData(this.api.projectApi)
            .subscribe((data: Test) => this.data = data); }

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
