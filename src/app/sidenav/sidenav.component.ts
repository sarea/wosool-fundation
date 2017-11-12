import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public routeLinks: any[];
  public currentRoute: string;
  public selectedIdx = -1;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.currentRoute = location.path();
      } else {
        this.currentRoute = '/home';
      }
    });
    this.routeLinks = [
      {
          label: 'Home',
          link: '/home',
          icon: 'home'
      }, {
          label: 'Projects',
          link: '/projects',
          icon: 'keyboard_arrow_down'
      }, {
          label: 'Partners',
          link: '/partners',
          icon: 'group'
      }, {
          label: 'About',
          link: '/about',
          icon: 'info'
      }
    ];
  }
  @Output() navToggle = new EventEmitter<boolean>();
  navClose() {
    this.navToggle.emit(true);
  }
  ngOnInit() {
  }

  isCurrentRoute(index) {
    return this.routeLinks[index].link === this.currentRoute;
  }

  selectItem(index) {
    if (this.routeLinks[index].label === 'Projects') {
      if (this.selectedIdx === index) {
        this.selectedIdx = -1;
      } else {
        this.selectedIdx = index;
      }
    } else {
      this.navClose();
      this.selectedIdx = -1;
    }
  }

}
