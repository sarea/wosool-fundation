import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {
  public images: Image[];
  constructor() {
    this.images = [
      {
         'title': 'We are covered',
         'url': 'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg'
        },
      {
        'title': 'Generation Gap',
        'url': 'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg'
      },
      {
        'title': 'Potter Me',
        'url': 'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg'
      },
      {
        'title': 'Pre-School Kids',
        'url': 'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg'
      },
      {
        'title': 'Young Peter Cech',
        'url': 'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}
