import { Component, HostListener } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  folderTitle = "Julia's Portfolio";

  options = [
    {'section':'About', 'startPos':0, 'anchorPos':0, 'endPos':489}, 
    {'section':'Skills & Tools', 'startPos':490, 'anchorPos': 880, 'endPos': 1749},
    {'section':'Projects', 'startPos':1750, 'anchorPos': 2000, 'endPos':2001}
  ];

  showOptions = true;

  //this is kept here so that the style of each option will
  //continously update on every scroll event
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(e) {}

  goToPosition(pos: number) {
    document.documentElement.scrollTop = document.body.scrollTop = pos;
  }

  onTitleClick() {
    this.showOptions = !this.showOptions;
  }

  isActive(startPos, endPos){
    if(window.pageYOffset >= startPos && window.pageYOffset < endPos){
      return true;
    }
    return false;
  }

}
