import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperContainer } from './data/data';
import 'swiper';

@Component({
  selector: 'app-main-welcome',
  templateUrl: './main-welcome.component.html',
  styleUrls: ['./main-welcome.component.scss']
})
export class MainWelcomeComponent implements OnInit, AfterViewInit {
  public swiperContainers = SwiperContainer;

  constructor() { }

    /**
     * @function next() Next button click and trigger event
     */

  next(): void {
      const actives = Array.from(document.querySelectorAll('.swiper-slide.swiper-slide-active .container .title span.active'));
      actives.forEach((active, index) => {
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
          titles.forEach((title, index) => {
              ++index;
              Array.from((<HTMLElement>title).querySelectorAll('span')).forEach((item: HTMLElement) => {
                  item.classList.add('active');
                  item.style.animationDelay = 3 * index + 's';
              });
          });
      });
  }

  ngAfterViewInit() {
      interface HTMLInputEvent extends Event {
          target: HTMLInputElement & EventTarget;
      }

      const swiper = new Swiper('.' + SwiperContainer.mainContainer, {
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

    ngOnInit() {

  }

}
