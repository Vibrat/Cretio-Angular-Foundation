import { Component, OnInit} from '@angular/core';
import { Entry, Data} from './data/contact-form';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [ ApiService ],
})

export class ContactFormComponent implements OnInit {
  public text = Entry;
  public data = new Data(
      'https://hilapy-be.herokuapp.com/contacts',
      'https://hilapy-be.herokuapp.com/contacts/media' );

  constructor( private api: ApiService ) { }

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
