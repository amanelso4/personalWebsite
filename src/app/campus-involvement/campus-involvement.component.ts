import {Component, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-campus-involvement',
  templateUrl: './campus-involvement.component.html',
  styleUrls: ['./campus-involvement.component.css'],
  providers: [NgbCarouselConfig],
})
export class CampusInvolvementComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['./assets/real2.jpg', './assets/fish.jpg'];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }



  ngOnInit() {
  }

}
