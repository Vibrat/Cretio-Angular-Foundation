import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Blogs} from '../blog/data/blog';
import {ApiService} from '../../api.service';
import {HttpClient} from '@angular/common/http';
import {Api, Portfolio, SwiperContainer} from './data/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
    public  porfolios: Portfolio[];
    private api = Api;
    public  swiperContainers = SwiperContainer;

    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ){ }


    showData(): void {
        this.apiService.getData(this.api.postApi)
            .subscribe((data: Portfolio[]) => this.porfolios = data);
    }

    ngAfterViewInit() {
        setTimeout (function () {
            const portfolios = new Swiper('.' + SwiperContainer.portfolio);
        }, 500);
    }

    ngOnInit() {
        this.showData();
    }
}
