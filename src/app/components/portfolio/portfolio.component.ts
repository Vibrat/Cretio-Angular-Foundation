import { AfterViewInit, Component, OnInit, ViewChildren, QueryList, Inject} from '@angular/core';
import { ApiService } from '../../api.service';

// languages, interface and config
import * as la from './data/porfolios.language';
import * as itf from './data/porfolios.interface';
import * as cf from './data/porfolios.config';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
    public cf = cf;
    public data: itf.Portfolio[];

    @ViewChildren('watching') things: QueryList<any>;

    constructor(
        @Inject('endpoints')  private endpoints,
        private apiService: ApiService
    ){ }

    showData(): void {
        this.apiService.getData(this.endpoints.getPorfolios)
            .subscribe((res: itf.Response) => {
                (res.meta.code == 200) ? this.data = res.data : console.log ('api response error, not having data');
            });
    }

    renderedJs(): void {
        const porfolios = new Swiper('.' + cf.swiper.name, {
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
