import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Blogs, Data } from './data/blog';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ ApiService ],
})

export class BlogComponent implements OnInit, AfterViewInit {
  public data = new Data('https://hilapy-be.herokuapp.com/posts', 'swiper-container-news');

  constructor(
        private apiService: ApiService,
  ){}

  showData(): void {
        this.apiService.getData(this.data.url)
            .subscribe((data: any) => this.data.blogs = data.data);
  }

  ngAfterViewInit(data = this.data) {
      setTimeout (function () {
          let swiperNews = new Swiper('.' + data.swiperContainer);
      }, 0);
  }

  ngOnInit() {
    this.showData();
  }

}
