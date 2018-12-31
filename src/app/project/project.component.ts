import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() title: string;
  @Input() githubLink: string;
  @Input() websiteLink: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
