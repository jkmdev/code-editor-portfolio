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
  
  ngAfterViewInit() {}

  onContactButtonClick() {
  }

}
