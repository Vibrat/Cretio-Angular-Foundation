import {Component, OnInit} from '@angular/core';
import { Entry, Data} from './data/contact-form';
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

export class ContactFormComponent implements OnInit {
  bool: string;
  newsletterForm: FormGroup;
  public text = Entry;
  public data = new Data(
      'https://hilapy-be.herokuapp.com/contacts',
      'https://hilapy-be.herokuapp.com/contacts/media' );

  constructor( private api: ApiService, private fb: FormBuilder ) {
      this.createForm();
  }

  createForm(): void {
     this.newsletterForm = this.fb.group({
          email: ['', [ Validators.required , Validators.email]],
     });
  }

  validation(event): void {
     this.bool = event;
     console.log(this.bool);
  }

  showData(): void {
        this.api.getData(this.data.url_contact).subscribe((data: any) =>
           this.data.contact = data['data'] );
        this.api.getData(this.data.url_media).subscribe((data: any) =>
           this.data.media = data );
  }

  ngOnInit() {
      this.showData();
  }
}
