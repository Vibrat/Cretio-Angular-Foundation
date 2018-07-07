///<reference path="data/blog.interface.ts"/>
import { AfterViewInit, Component, OnInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { ApiService } from '../../api.service';
import { Endpoints } from '../../core/endpoints/endpoints.component';

// interfaces, language & config
import * as itf from './data/blog.interface';
import * as cf from './data/blog.config';
import * as la from './data/blog.language';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})

export class BlogComponent implements OnInit, AfterViewInit {
  protected data: itf.Data[];
  public cf = cf.Config;
  public la = la.Language;

  @ViewChildren('watching') things: QueryList<any>;

  constructor(
      @Inject ('endpoints') private endpoints: Endpoints,
      private apiService: ApiService ) {

  }

   ngAfterViewInit() {
        this.things.changes.subscribe(() => { this.renderedJs(); });
  }

  ngOnInit() {
        this.showData();
  }

  showData(): void {
    const api = this.endpoints.getPosts;

    this.apiService.getData(api).subscribe((res: itf.Response) => {
        if (res.meta.code != 200) {
            console.warn('api not return right information');
            return;
        }

        this.data = res.data;
    });


  }

  renderedJs(): void{
      new Swiper('.' + cf.Config.swiperName, { spaceBetween: 12 });
      let loaders = Array.from(document.getElementsByClassName('-loading'));
      loaders.forEach((loader) => {
          (<HTMLElement> loader).classList.add('-disappear');
      });
  }

}
