import { Component, OnInit } from '@angular/core';
import { ContactForm, FollowUs, ContactUs, Data} from './data/contact-form';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  data = new Data('https://hilapy-be.herokuapp.com/contacts');
  contactForm = ContactForm;
  followUs = FollowUs;
  contactUs = ContactUs;

  constructor(
      private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getData(this.data.url).subscribe((data: any) => this.data.contact = data.data);
  }

}
