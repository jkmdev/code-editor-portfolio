import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  developerName = "Julia McGeoghan";
  developerTitle = "Full Stack Developer";

  constructor() { }

  ngAfterViewInit() {
    //const scroll$ = Rx.Observable.fromEvent(window, 'scroll');
  }

  onContactButtonClick() {
  }

}
