import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Blogs } from './data/blog';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { Api, SwiperContainer } from '../../right-section/data/data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {
  public  allNews: Blogs[];
  private api = Api;
  public  swiperContainers = SwiperContainer;

  constructor(
        private http: HttpClient,
        private apiService: ApiService
  ){ }


  showData(): void {
        this.apiService.getData(this.api.postApi)
            .subscribe((data: Blogs[]) => this.allNews = data);
  }

  ngAfterViewInit() {
      setTimeout (function () {
          const swiperNews = new Swiper('.' + SwiperContainer.newsContainer);
      }, 500);
  }

  ngOnInit() {
    this.showData();
  }

}
