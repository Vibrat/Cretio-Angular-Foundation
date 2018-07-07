import { AfterViewInit, Component, Inject } from '@angular/core';

import { ApiService } from '../../api.service';
import * as cf from './data/logos.config';
import * as itf from './data/logos.interface';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements AfterViewInit {
  protected cf = cf;
  protected data: itf.Logos;

  constructor(
      @Inject('endpoints') private endpoints,
      private api: ApiService
  ) {
      this.api.getData(this.endpoints.getPartners).subscribe((res: itf.Response) => {
          (res.meta.code == 200) ? this.data = res.data : console.warn('api not work');
      });
  }

  ngAfterViewInit (): void {
      new Swiper('.' + cf.SwiperContainer.name, {
          slidesOffsetBefore: 14,
          slidesPerView: 1,
          spaceBetween: 25,
          slidesOffsetAfter: 14,
          width: 120
      });
  }
}
