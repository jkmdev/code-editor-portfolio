import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { 

    if(!this.title) {
      this.title = "Undefined";
    }

    if(!this.description) {
      this.description = "Undefined";
    }

  }

  ngOnInit() {
  }

}
