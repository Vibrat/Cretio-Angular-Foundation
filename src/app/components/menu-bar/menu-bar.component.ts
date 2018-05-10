import { Component, OnInit } from '@angular/core';
import { Datas, Logo } from './data/menu-data';
import { ContactForm, FollowUs, ContactUs } from './data/contact-form';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {
  datas = Datas;
  logo = Logo;
  ContactForm = ContactForm;
  FollowUs = FollowUs;
  ContactUs = ContactUs;

  constructor() { }

  ngOnInit() {

  }

}
