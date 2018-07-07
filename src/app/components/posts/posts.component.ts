import {Component, OnInit, ViewChildren, QueryList, AfterViewInit, Inject, OnChanges, SimpleChanges} from '@angular/core';
import { ApiService} from '../../api.service';


// languages, config & interface
import * as itf from './data/posts.interface';
import * as cf from  './data/posts.config';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit, OnChanges {
  // language and config
  public cf = cf;

  public data: itf.Data[];
  public lazyData: itf.Data[];
  public swiper: Swiper;

  // Pagination config
  public offset: number = 1;
  public limit: number = 2;

  @ViewChildren('watching') things: QueryList<any>;

  constructor(
      @Inject ('endpoints') private endpoints,
      private api: ApiService ) { }

  ngAfterViewInit() { this.things.changes.subscribe(() => this.renderJs()); }

  ngOnInit() { this.showData(); }

  ngOnChanges(changes: SimpleChanges) {
      console.log (changes);
  }

  showData(): void {
      this.api.getData(this.endpoints.getPosts + '?limit=2&offser=1').subscribe((res: itf.Response) => { this.data = res.data });
  }

  renderJs(): void {
      this.swiper = new Swiper('.' + cf.Config.swiperName, {
          slidesPerView: 1,
          spaceBetween: 1000,
          slidesOffsetBefore: 0,
          preloadImages: true,
          paginationType: 'bullets',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-custom-next',
          prevButton: '.swiper-custom-prev',
          onReachEnd: () => this.loadMore()
      });
  }

  private loadMore() {
      // Setting Pagination here
      ++this.offset;
      this.api.getData('https://hilapy-be.herokuapp.com/posts?limit=2&offset=' + this.offset)
          .subscribe((res)=> {
              if (res.meta.code != 200 || !res.data.length) return;
              this.lazyData = res.data;
      });

      this.swiper.slideTo(2, 300, false)
  }

  setTemplate(event) {
      console.log(event);
  }
}

