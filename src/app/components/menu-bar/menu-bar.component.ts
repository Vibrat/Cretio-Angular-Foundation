import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Datas, Logo } from './data/menu-data';
import { ContactForm, FollowUs, ContactUs } from './data/contact-form';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent implements OnInit, AfterViewInit {
  datas = Datas;
  logo = Logo;
  ContactForm = ContactForm;
  FollowUs = FollowUs;
  ContactUs = ContactUs;

  constructor( private api: ApiService ) { }

  showData(): void {
      this.api.getData('https://hilapy-be.herokuapp.com/menus?offset=1&limit=3').subscribe((data: any) => {
            // this.datas = data['data']
      });
  }

  ngAfterViewInit() {
      /**
       * change button to X after clicked
       */

      const navButton = document.querySelector('.navbar-toggler');

      navButton.addEventListener('click', function () {
        if ((<HTMLElement>this).classList.contains('navRotation')) {
            (<HTMLElement>this).innerHTML = '<span data-toggle="collapse" data-target="#menu-bar--toggle" class="fa fa-bars"></span';
            (<HTMLElement>this).classList.remove('navRotation');
        } else {
            (<HTMLElement>this).innerHTML = '<span data-toggle="collapse" data-target="#menu-bar--toggle" class="fa fa-plus"></span';
            (<HTMLElement>this).classList.add('navRotation');
        }
      });
  }

  ngOnInit() {
      this.showData();
  }

}
