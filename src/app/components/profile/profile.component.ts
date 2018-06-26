import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
declare var Swiper : any;
declare var M : any;
declare var $ : any;

@Component({
  selector: 'app-main-contentt',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
  }

  ngAfterViewInit() {
    // Paste code cua script vao day
    var mySwiper = new Swiper ('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
      loop : true,
    });

    // Initialize side navigation
    var sidNav = this.elementRef.nativeElement.querySelector('.sidenav');
    M.Sidenav.init(sidNav);

    // Initialize Scrollpy which help smooth scrolling to target.
    var sections = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(sections, {scrollOffset:0});
  }
}
