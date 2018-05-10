import { Component, OnInit } from '@angular/core';
import { ContactForm, FollowUs, ContactUs } from './data/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  contactForm = ContactForm;
  followUs = FollowUs;
  contactUs = ContactUs;

  constructor() { }

  ngOnInit() {
  }

}
