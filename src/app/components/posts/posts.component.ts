import {Component, OnInit, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import { ApiService} from '../../api.service';
import { Data } from './data/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit {
  public data = new Data('https://hilapy-be.herokuapp.com/posts?offset=1&limit=6', 'swiper-post' );

  @ViewChildren('watching') things: QueryList<any>;

  constructor(
      private api: ApiService
  ) { }

  showData(): void {
      this.api.getData(this.data.url).subscribe((data: any) => {
          this.data.posts = data['data'];
      });
  }

  renderJs(): void {
      let postsSwiper = new Swiper('.' + this.data.swiperContainer, {
          slidesPerView: 1,
          spaceBetween: 1000,
          slidesOffsetBefore: 0,
          preloadImages: true,
          paginationType: 'fraction',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-custom-next',
          prevButton: '.swiper-custom-prev',
      });
  }

  ngAfterViewInit() {
      this.things.changes.subscribe(() => this.renderJs());
  }

  ngOnInit() {
    this.showData();
  }
}
