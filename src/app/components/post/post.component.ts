import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  sluge = '';

  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    // Return the slug from snapshot browser to get slug ID

    let slug = this.route.snapshot.paramMap.get('slug');
  }
}
