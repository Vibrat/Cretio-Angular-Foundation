import { AfterViewInit, Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import {ApiService} from '../../api.service';
import {Data, Portfolio} from './data/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
    public  data = new Data('https://hilapy-be.herokuapp.com/posts', 'swiper-container-port');

    @ViewChildren('watching') things: QueryList<any>;

    constructor(
        private apiService: ApiService
    ){ }

    showData(): void {
        this.apiService.getData(this.data.url)
            .subscribe((data: Portfolio[]) => {
                this.data.porfolios = data['data'];
                this.data.meta = data['meta'];
            });
    }

    renderedJs(): void {
        let porfolios = new Swiper('.' + this.data.swiperContainer, {
            slidesPerView: 1,
            spaceBetween: 11,
            width: 280,
            slidesOffsetBefore: 11,
            preloadImages: true,
        });
    }

    ngAfterViewInit(data = this.data) {
        this.things.changes.subscribe(() =>  {
          this.renderedJs();
        });
    }

    ngOnInit() {
        this.showData();
    }
}
