import { Component, AfterViewInit, HostListener } from '@angular/core';
import { fromEvent } from "rxjs";
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  developerName = "Julia McGeoghan";
  developerTitle = "Full Stack Developer";
  stickyNavbar = false;
  
  constructor() {
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      this.stickyNavbar = true;
    } else {
      this.stickyNavbar = false;
    }
  }

  ngAfterViewInit() {}

  onContactButtonClick() {
  }

  test() {
    return this.stickyNavbar;
  }

}
