import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit  {

  folderTitle = "Julia's Portfolio";
  options = ['About', 'Skills', 'Projects', 'Open Source', 'Blog', 'Codepen'];

  constructor() {
  }

  ngOnInit() {
  }

  onOptionClick() {
  }

}
