import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = "Hello World";
  info = "I'm a developer that wants to make the internet better than it already is.";
  email = "juliakm.dev@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
