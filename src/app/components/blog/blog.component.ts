import { AfterViewInit, Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Data } from './data/blog';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ ApiService ],
})

export class BlogComponent implements OnInit, AfterViewInit {

  public data = new Data('https://hilapy-be.herokuapp.com/posts', 'swiper-container-news');

  @ViewChildren('watching') things: QueryList<any>;

  constructor( private apiService: ApiService ) {}

  /**
   * @function showData() Loading Data needed to display and run the component
   */

  showData(): void {
    this.apiService.getData(this.data.url)
        .subscribe((data: any) => {
            this.data.blogs = data['data'];
            this.data.meta  = data['meta'];
    });

  }

  /**
   * This function trigger after ngFor finish creating DOM
   */
  renderedJs(): void{
      let swiperNews = new Swiper('.' + this.data.swiperContainer);
      let loaders = Array.from(document.getElementsByClassName('-loading'));
      loaders.forEach((loader, index) => {
          (<HTMLElement> loader).classList.add('-disappear');
      });
      console.log ('@ViewChildren Callback function');
  }

  ngAfterViewInit() {
      /**
       * Subscribe to modification after finish changing
       */
      this.things.changes.subscribe(() => { this.renderedJs(); });
  }

  ngOnInit() {
    this.showData();
  }
}
