import {Component, OnInit} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }



  ngOnInit() {
  }

}
