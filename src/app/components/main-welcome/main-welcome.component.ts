import {AfterViewInit, Component, OnInit} from '@angular/core';
import { SwiperContainer } from './data/data';
import 'swiper';

@Component({
  selector: 'app-main-welcome',
  templateUrl: './main-welcome.component.html',
  styleUrls: ['./main-welcome.component.scss']
})
export class MainWelcomeComponent implements OnInit, AfterViewInit {
  private calculator = 1;
  public swiperContainers = SwiperContainer;

  constructor() { }

  ngAfterViewInit() {
      interface HTMLInputEvent extends Event {
          target: HTMLInputElement & EventTarget;
      }

      const swiper = new Swiper('.' + SwiperContainer.mainContainer, {
          simulateTouch: false,
      });

      const spans = Array.from(document.querySelectorAll('.word span'));
      spans.forEach((span, idx) => {
          span.addEventListener('click', (e) => {
              (<HTMLInputEvent>e).target.classList.add('active');
          });
          span.addEventListener('animationend', (e) => {
              (<HTMLInputEvent>e).target.classList.remove('active');
          });

          // Initial animation
          setTimeout(() => {
              span.classList.add('active');
          }, 750 * (idx + 1));
      });

      let titles = Array.from(document.querySelectorAll('.container .title'));

      const containers = Array.from(document.querySelectorAll('.swiper-wrapper .swiper-slide .container'));

      containers.forEach((container) => {
          titles = Array.from(container.querySelectorAll('.title'));
          titles.forEach((title) => {
              Array.from(title.querySelectorAll('span')).forEach((item) => {
                  item.style.animationDelay = 4 * this.calculator + 's';
              });
              ++this.calculator;
          });

          setTimeout(function () {
              swiper.slideNext();
          }, this.calculator * 4000);
      });
  }

  ngOnInit() {

  }

}
