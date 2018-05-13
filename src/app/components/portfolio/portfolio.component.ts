import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Data, Portfolio} from './data/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
    public  data = new Data('api/post', 'swiper-container-port');

    constructor(
        private apiService: ApiService
    ){ }

    showData(): void {
        this.apiService.getData(this.data.url)
            .subscribe((data: Portfolio[]) => this.data.porfolios = data);
    }

    ngAfterViewInit(data = this.data) {
        setTimeout (function () {
            let porfolios = new Swiper('.' + data.swiperContainer);
        }, 0);
    }

    ngOnInit() {
        this.showData();
    }
}
