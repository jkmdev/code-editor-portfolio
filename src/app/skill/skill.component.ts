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
    this.title = "Testing";
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit vulputate congue. In lacinia sem eu fringilla bibendum. Quisque id magna diam. Integer a nunc tincidunt, pretium lacus accumsan, semper augue. Suspendisse ultrices mi ac purus ultrices, et pretium justo feugiat. Fusce congue ipsum vitae tellus euismod, in consequat lorem finibus.";
  }

  ngOnInit() {
  }

}
