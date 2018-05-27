import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent implements OnInit {

  constructor(){ }

  showData(): void {}
  ngOnInit() { this.showData(); }
}
