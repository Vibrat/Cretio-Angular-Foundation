import { AfterViewInit, Component, Inject, ViewChildren, QueryList } from '@angular/core';
import { ApiService } from '../../api.service';

//language, interfaces, and configs
import * as cf from './data/main-welcome.config';
import * as itf from './data/main-welcome.interface';

// import Swiper for usages
import 'swiper';

@Component({
  selector: 'app-main-welcome',
  templateUrl: './main-welcome.component.html',
  styleUrls: ['./main-welcome.component.scss']
})
export class MainWelcomeComponent implements AfterViewInit {
  public cf = cf;
  protected data: itf.Sliders;
  protected content: any[] = [];
  @ViewChildren('watcher') slider: QueryList<any>;

  constructor(
      @Inject('endpoints') private endpoints,
      private api: ApiService) {

      this.api.getData(this.endpoints.getSliders).subscribe((res: itf.Reponse) => {
          (res.meta.code == 200) ? this.data = res.data : console.log ('api not supported');

          for (let count = 0; count < res.data.length; count ++) {
              this.content.push([[]]);
              const container = document.createElement('div');
              container.innerHTML = res.data[count].content;
              let contents = Array.from(container.querySelectorAll('div.title'));
              contents.forEach((content, index) => {
                  const divActive = Array.from(content.querySelectorAll('div'));
                  divActive.forEach((active, i) => {
                      this.content[count][index][i] = active.innerHTML;
                  });
              });
          }
      });
  }

  /**
    * @function next() Next button click and trigger event
  */

  next(): void {
      const actives = Array.from(document.querySelectorAll('.swiper-slide.swiper-slide-active .container .title span.active'));
      actives.forEach((active) => {
         active.classList.remove('active');
      });
      const boxes = Array.from(document.querySelectorAll('.swiper-slide.swiper-slide-next'));
      this.sliderCheck(boxes);
  }

    /**
     * @functon prev() Click on Back to back to previous sliders.
     */

  prev(): void {
      const boxes = Array.from(document.querySelectorAll('.swiper-slide.swiper-slide-prev'));
      this.sliderCheck(boxes);
  }

    /**
     *  @function sliderCheck() Check Slders and add appear animation
     * @param containers css Class for Sliders.
     */

  sliderCheck(containers): void {
      containers.forEach((container) => {
          const titles = Array.from(container.querySelectorAll('.container .title'));
          titles.forEach((title: HTMLElement, index) => {
              ++index;

              Array.from((<HTMLElement>title).querySelectorAll('div')).forEach((item: HTMLElement) => {
                  item.style.animationDelay = 3 * index + 's';
                  item.classList.add('active');
              });
          });
      });
  }

  ngAfterViewInit() {
      this.slider.changes.subscribe(() => this.renderSliders());
  }

  renderSliders() {
        interface HTMLInputEvent extends Event {
            target: HTMLInputElement & EventTarget;
        }

        const swiper = new Swiper('.' + cf.SwiperContainer.name, {
            simulateTouch: false,
            paginationType: 'bullets',
            pagination: '.swiper-pagination',
            paginationClickable: false,
            nextButton: '.swiper-custom-next',
            prevButton: '.swiper-custom-prev',
            /*
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            scrollbarDraggable: true
            */
        });

        const containers = Array.from(document.querySelectorAll('.swiper-slide.swiper-slide-active'));
        this.sliderCheck(containers);

        const spans = Array.from(document.querySelectorAll('.word span'));
        spans.forEach((span, idx) => {
            span.addEventListener('click', (e) => {
                (<HTMLInputEvent>e).target.classList.add('active');
            }, { passive: true });
            span.addEventListener('animationend', (e) => {
                (<HTMLInputEvent>e).target.classList.remove('active');
            }, { passive: true });
            // Initial animation
            setTimeout(() => {
                span.classList.add('active');
            }, 750 * (idx + 1));
        });
    }
}
