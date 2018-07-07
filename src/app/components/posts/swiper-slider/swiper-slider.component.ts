import {Component, OnInit, OnChanges, Input, ElementRef, Output, EventEmitter, SimpleChanges} from '@angular/core';
import * as itf from '../data/posts.interface';
@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['../posts.component.scss']
})
export class SwiperSliderComponent implements OnChanges {
  @Input()  lazyData: itf.Data[] = undefined;
  @Input()  post: itf.Data;
  @Output() eleRef: EventEmitter<any> = new EventEmitter();

  public template: ElementRef;
  public onLoadMore: boolean = false;

  constructor(templateRef: ElementRef) {
      this.template = templateRef;
  }

  ngOnChanges(changes: SimpleChanges) {
      if (this.lazyData) {
          this.onLoadMore = (!changes.lazyData.isFirstChange());
          if (this.onLoadMore) {
              for (let loader of this.lazyData) {
                  this.post = loader;
                  this.eleRef.emit(this.template);
              }
          }
      }
  }


}
